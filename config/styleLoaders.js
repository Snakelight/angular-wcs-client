const path = require('path');
const postcssUrl = require('postcss-url');
const postcssImports = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const maximumInlineSize = 10;
const minimizeCss = false;
const optionsGen = require('./options');


const postcssPlugins = function (loader) {
    const importantCommentRe = /@preserve|@licen[cs]e|[@#]\s*source(?:Mapping)?URL|^!/i;
    const minimizeOptions = {
        autoprefixer: false,
        safe: true,
        mergeLonghand: false,
        discardComments: { remove: (comment) => !importantCommentRe.test(comment) }
    };
    return [
        postcssImports({
            resolve: (url, context) => {
                return new Promise((resolve, reject) => {
                    let hadTilde = false;
                    if (url && url.startsWith('~')) {
                        url = url.substr(1);
                        hadTilde = true;
                    }
                    loader.resolve(context, (hadTilde ? '' : './') + url, (err, result) => {
                        if (err) {
                            if (hadTilde) {
                                reject(err);
                                return;
                            }
                            loader.resolve(context, url, (err, result) => {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve(result);
                                }
                            });
                        }
                        else {
                            resolve(result);
                        }
                    });
                });
            },
            load: (filename) => {
                return new Promise((resolve, reject) => {
                    loader.fs.readFile(filename, (err, data) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        const content = data.toString();
                        resolve(content);
                    });
                });
            }
        }),
        postcssUrl({
            filter: ({ url }) => url.startsWith('~'),
            url: ({ url }) => {
                const fullPath = path.join(projectRoot, 'node_modules', url.substr(1));
                return path.relative(loader.context, fullPath).replace(/\\/g, '/');
            }
        }),
        postcssUrl([
            {
                filter: ({ url }) => url.startsWith('/') && !url.startsWith('//'),
                url: ({ url }) => {
                    if (deployUrl.match(/:\/\//) || deployUrl.startsWith('/')) {
                        return `${deployUrl.replace(/\/$/, '')}${url}`;
                    }
                    else if (baseHref.match(/:\/\//)) {
                        return baseHref.replace(/\/$/, '') +
                            `/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                    }
                    else {
                        return `/${baseHref}/${deployUrl}/${url}`.replace(/\/\/+/g, '/');
                    }
                }
            },
            {
                filter: (asset) => {
                    return maximumInlineSize > 0 && !asset.hash && !asset.absolutePath.endsWith('.cur');
                },
                url: 'inline',
                maxSize: maximumInlineSize,
                fallback: 'rebase',
            },
            { url: 'rebase' },
        ]),
        autoprefixer({ grid: true }),
    ].concat(minimizeCss ? [cssnano(minimizeOptions)] : []);
};

const genLoader = (extension) => {

    let loaderExt = extension;
    if (extension == 'scss') loaderExt = 'sass';

    let loader = {
        loader: `${loaderExt}-loader`,
        options: { sourceMap: false }
    };

    if (extension == 'css')
        loader.options.import = false;

    return loader
}

const generateStyleRule = (path, extension, isNodeModule = false) => {

    let loaders = isNodeModule ? ["exports-loader?module.exports.toString()"] : ["style-loader"];
    loaders.push(genLoader('css'));
    loaders.push({
        "loader": "postcss-loader",
        "options": {
            "ident": "postcss",
            "plugins": postcssPlugins,
            "sourceMap": false
        }
    });

    if (extension != 'css')
        loaders.push(genLoader(extension));

    let rule = {
        test: new RegExp('\\.' + extension + '$'),
        use: loaders
    }

    rule[isNodeModule ? "exclude" : "include"] = [path];
    return rule;
}

const generateStyleRules = (env, entry) => {
    const options = optionsGen(env);
    const rules = [
        ...options.styleExtensions.map(e => generateStyleRule(path.join(options.sourceDir, entry), e, true)),
        ...options.styleExtensions.map(e => generateStyleRule(path.join(options.sourceDir, entry), e, false))
    ];
    return rules;
}

module.exports = generateStyleRules
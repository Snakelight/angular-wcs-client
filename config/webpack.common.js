const path = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping');
const genOptions = require('./options');
const generateStyleRules = require('./styleLoaders');

const ProgressPlugin = require('webpack/lib/ProgressPlugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin, ContextReplacementPlugin } = require('webpack');
const { CommonsChunkPlugin } = require('webpack').optimize;

const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { NamedLazyChunksWebpackPlugin } = require('@angular/cli/plugins/webpack');

module.exports = (env) => {
    const options = genOptions(env);

    const isVendorModule = (module) => {
        return module.resource
            && (module.resource.startsWith(options.nodeModules)
                || module.resource.startsWith(options.genDirNodeModules));
    };

    const angularCompilerOptions = {
        mainPath: path.join(options.sourceDir, 'main.ts'),
        platform: 0,
        hostReplacementPaths: {
            "environments\\environment.ts": "environments\\environment.ts"
        },
        sourceMap: false,
        tsConfigPath: path.join(options.configsDir, 'tsconfig.app.json'),
        skipCodeGeneration: true,
        compilerOptions: {}
    }

    let config = {}
    config.resolve = {
        extensions: ['.ts', '.js', '.scss'],
        modules: ["./node_modules"],
        symlinks: true,
        alias: rxPaths(),
        mainFields: ["browser", "module", "main"]
    };

    config.resolveLoader = {
        modules: ["./node_modules"],
        alias: rxPaths()
    };

    config.entry = {
        main: path.join(options.sourceDir, "main.ts"),
        polyfills: path.join(options.sourceDir, "polyfills.ts"),
        styles: path.join(options.sourceDir, "styles.scss")
    };

    config.output = {
        path: options.distDir,
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",
        publicPath: '/_/'
    };

    let rules = [
        { test: /\.ts$/, loader: "@ngtools/webpack" },
        { test: /\.html$/, loader: "raw-loader" },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?name=[name].[ext]&limit=10000&useRelativePath=true"
        },
        ...generateStyleRules(env, 'styles.scss')
    ]

    config.module = { rules }

    config.plugins = [
        new NoEmitOnErrorsPlugin(),
        new ProgressPlugin(),
        new NamedModulesPlugin({}),
        new NamedLazyChunksWebpackPlugin(),
        new ContextReplacementPlugin(/moment[\/\\]locale$/, /ru|en/),
        new ContextReplacementPlugin(/\@angular\b.*\b(bundles|linker)/, options.sourceDir),
        new ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, options.sourceDir),
        new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, options.sourceDir),
        new CommonsChunkPlugin({ name: ["inline"], minChunks: null }),
        new CommonsChunkPlugin({ name: ["vendor"], minChunks: isVendorModule, chunks: ["main"] }),
        new CommonsChunkPlugin({ name: ["main"], minChunks: 2, async: "common" }),
        new AngularCompilerPlugin(angularCompilerOptions)
    ]

    return config;
}



        //new CircularDependencyPlugin({
        //    exclude: /(\\|\/)node_modules(\\|\/)/,
        //    failOnError: false,
        //    onDetected: false,
        //    cwd: projectRoot
        //}),
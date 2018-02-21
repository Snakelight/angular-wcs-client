const path = require('path');
const fs = require('fs');

const genOptions = (env) => {
    const isProd = env == 'prod';
    const rootDir = path.join(__dirname, '../');

    let distDir = isProd ?
        path.join(rootDir, '../', 'wwwroot', 'dist') :
        path.join(rootDir, 'dist');

    return {
        isDev: !isProd,
        isProd: isProd,
        rootDir,
        configsDir: path.join(rootDir, 'config'),
        sourceDir: path.join(rootDir, 'src'),
        distDir: distDir,
        minimize: isProd,
        extractCss: isProd,
        showStat: false,
        nodeModules: path.join(rootDir, 'node_modules'),
        genDirNodeModules: path.join(rootDir, 'src', '$$_gendir', 'node_modules'),
        styleExtensions: ['css', 'scss', 'sass', 'less']
    }
}

module.exports = genOptions
var Encore = require('@symfony/webpack-encore');

const { VueLoaderPlugin } = require('vue-loader');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()                     // empty the outputPath dir before each build
    .enableSourceMaps(!Encore.isProduction())       // enable source maps for Dev
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // define the assets of the project
    .addEntry('js/app', './assets/js/index.js')
    .addStyleEntry('css/style', './assets/css/custom.less')

    .enableLessLoader(function(options) {
        // https://github.com/webpack-contrib/less-loader#examples
        // http://lesscss.org/usage/#command-line-usage-options
        // options.relativeUrls = false;
    })
    .addLoader({
        test: /\.vue$/,
        loader: 'vue-loader'
    })
    .addPlugin(new VueLoaderPlugin())

    // $/jQuery as a global variable
    .autoProvidejQuery()
    .addAliases({
        vue: 'vue/dist/vue.js'
      })
;

module.exports = Encore.getWebpackConfig();

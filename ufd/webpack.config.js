
const path = require('path');
const webpack = require('webpack');

const isProd = (process.env.NODE_ENV === 'production');

function getPlugins() {
    let plugins = [];

    plugins.push(new webpack.ProvidePlugin({
        fetch: 'exports?self.fetch!whatwg-fetch',
    }));

    plugins.push(new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }));
    
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        },
    }));

    plugins.push(new webpack.NamedModulesPlugin());

    if (isProd) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            sourcemap: false,
            compress: {
                warnings: false
            }
        }));
    }

    return plugins;
};

module.exports = {
    devtool: 'source-map',
    entry: {
        runtime: [path.resolve('app/components', 'index.js')],
        init: path.resolve('app', 'app.js')
    },
    output: {
        // publicPath: 'http://vzwqa7.verizonwireless.com/', // This should come from the entry point
        path: path.join(__dirname, '../dist/UFD/js/'),
        filename: 'bundle.[name].js',
        chunkFilename: 'chunk.[name].js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loaders: ['style-loader', 'css-loader'],
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader',
        }, {
            test: /\.(jpg|png|gif)$/,
            loaders: [
                'file-loader',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
            ],
        }, {
            test: /\.html$/,
            loader: 'html-loader',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }, {
            test: /\.(mp4|webm)$/,
            loader: 'url-loader?limit=10000',
        }]
    },
    plugins: getPlugins(),
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: [
            '.js',
            '.jsx',
            '.react.js',
        ],
        mainFields: [
            'browser',
            // Necessary hack because of a bug in redux-form
            // https://github.com/erikras/redux-form/issues/1637
            'main',
            'jsnext:main',
        ],
    }
};

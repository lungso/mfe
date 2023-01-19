const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8083/'
    },
    devServer: {
        port:8083,
        historyApiFallback: {
            pindex: '/index.html'
        },
        headers: {
            'Access-Control-Allow-Origin': '*' // to allow for CORS to load some fonts 
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard', //globally ues,
            filename: 'remoteEntry.js',
            exposes:{
                './DashboardApp' : './src/bootstrap'
            },
            //shared: ['react', 'react-dom'],
            shared: packageJson.devDependencies, 
        }),
        new HtmlWebpackPlugin ({
            template: './public/index.html'
        })
    ]
};

module.exports = merge(commonConfig, devConfig); //devConfig override.

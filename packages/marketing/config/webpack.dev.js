const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port:8081,
        historyApiFallback: {
            pindex: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing', //globally ues,
            filename: 'remoteEntry.js',
            exposes:{
                './MarketingApp' : './src/bootstrap'
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

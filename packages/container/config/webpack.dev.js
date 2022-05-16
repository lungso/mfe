const { merge } = require('webpack-merge');
//const HtmlWebpackPlugin = require('html-webpack-plugin'); move to common
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port:8080,
        historyApiFallback: {
            pindex: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({ 
            name: 'container', //host and so never use
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            //shared: ['react', 'react-dom'],
            shared: packageJson.devDependencies, 
        }),
        /* move to common
            new HtmlWebpackPlugin ({
            template: './public/index.html'
        })*/
    ]

};

module.exports = merge(commonConfig, devConfig); //devConfig override.

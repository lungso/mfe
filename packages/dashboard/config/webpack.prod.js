const { merge }  = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJosn = require('../package.json');
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/dashboard/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth', //globally ues,
            filename: 'remoteEntry.js',
            exposes:{
                './DashboardApp' : './src/bootstrap'
            },
            //shared: ['react', 'react-dom'],
            shared: packageJson.devDependencies, 
        })
    ]
}
// netstat -ano | findstr :8081 
module.exports = merge(commonConfig, prodConfig);
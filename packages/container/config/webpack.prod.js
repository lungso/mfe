const { merge }  = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJosn = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', //no uses as host 
            remotes: {
                //makreting: `marketing@${domain}/marketing/remoteEntry.js`
                marketing: `marketing@http://${domain}:8081/remoteEntry.js`,
            },
            shared: packageJosn.dependencies
        })
    ]
}
// netstat -ano | findstr :8081 
module.exports = merge(commonConfig, prodConfig);
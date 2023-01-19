const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
        //webpack knows how to load up vue files.
    },
    module:{
        rules : [
            {
                // to allow webpack vue custom fonts/images, use file-loader to let webpack to load those extension
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
                use: [
                    {loader: 'file-loader'}
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [/*'@babel/preset-react', [no react at all] */'@babel/preset-env'], //process reaac tcode js es2015, 
                        plugins: ['@babel/plugin-transform-runtime'] // add code async etc syntax
                    }
                }
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
};
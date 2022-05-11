module.exports = {
    module:{
        rules : [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'], //process reaac tcode js es2015, 
                        plugins: ['@babel/plugin-transform-runtime'] // add code async etc syntax
                    }
                }
            }
        ]
    }
};
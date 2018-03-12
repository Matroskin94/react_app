    const path = require('path');
const autoprefixer = require('autoprefixer');
const customMedia = require('postcss-custom-media');
const screenSizes = require('./src/constants/ScreenSizes.js');

module.exports = {
    entry: './src/App.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
      rules: [
        { 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            use: [
                { 
                    loader: "style-loader" 
                },
                { 
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers:['ie >= 8', 'last 4 version']
                            }),
                            customMedia({
                                extensions:screenSizes
                            })
                        ],
                        sourceMap: true
                    }
                }
            ]
        }
      ]
    },
    devServer: {
        historyApiFallback: true,
    }
};
const path = require("path");
const autoprefixer = require('autoprefixer');

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
var path = require("path");

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
                }
            ]
        }
      ]
    },
    devServer: {
        historyApiFallback: true,
    }
};
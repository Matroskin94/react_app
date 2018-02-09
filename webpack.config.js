var path = require("path");
module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
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
                        modules: true
                    }
                }
            ]
        }
      ]
    }
};
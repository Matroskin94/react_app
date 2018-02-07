var path = require("path");
module.exports = {
    entry: './src/App.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        { 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: "babel-loader",
            query: { presets: ['es2015', 'react'] } 
        },
        {
            test: /\.css$/,
            use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
            ]
        }
      ]
    }
};
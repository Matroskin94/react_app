module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
};
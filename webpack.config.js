var webpack = require("webpack");
module.exports = {
    entry: "./main.js",
    output: {
        filename: "./dist/bundle.js"
    },
    //using loaders. babel and css.
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }

        ]
    },
//Using webpacks plugin uglify to minimize js file.
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};

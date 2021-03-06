var path = require('path');
var webpack = require("webpack");

module.exports = {
    devtool: 'eval-source-map',
    entry:[
        path.resolve(__dirname, 'app/main.js')
    ],
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets:['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                exclude:/node_modules/
            }
        ]
    },
    devServer:{
        contentBase: './build',
        historyApiFallback: true,
        inline:true
    }
};

new webpack.DefinePlugin({
    'process.env':{
        NODE_ENV: JSON.stringify('production')
    }
}),
new webpack.optimize.UglifyJsPlugin()
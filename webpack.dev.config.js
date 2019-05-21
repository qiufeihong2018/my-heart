const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    entry:'./src/index.js',
    output:{
        path:__dirname,
        filename:"./release/bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        open: true,
        port: 5656,
        hot: true
    }
}
module.exports = config
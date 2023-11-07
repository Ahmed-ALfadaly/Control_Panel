const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const  MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const loader = require('sass-loader');


module.exports = {
    entry :{
        'app': './src/index.js',
    },
    output :{
        publicPath: '/',
        path: path.join(__dirname, '/app'),
        filename: 'app.js',
    },
    devServer: {
        static: path.join(__dirname, '/app'),
        port:8081,
        devMiddleware: {
            writeToDisk: true,
          },
          open: true,
    },

    module:{
        rules:[
            {
                test: '/\.html$/',
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
           
        ],
        rules: [

            {
  
              test: /\.(sass|css|scss)$/,
  
              use: [
  
                MiniCssExtractPlugin.loader,
  
                "css-loader",
                "postcss-loader",
                "sass-loader",
  
              ],
  
            },
            {
                test: /\.(svg|woff|woff2|eot|png|ttf)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './assets/fonts'
                        }
                    }
                ]
            }
  
        ]
    },
    plugins :[
        new CleanWebpackPlugin({}),
        new  MiniCssExtractPlugin({}),
        new OptimizeCSSAssetsPlugin({
            filename: "assets/css/style.css"
         }),
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : './src/index.html',
        }),
    ]
}

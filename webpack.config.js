const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


let entryFiles = {
    theme: './src/assets/vue-theme.js'
};

let config = {
    mode: 'development',
    target: 'web',
    entry: entryFiles,
    output: {
        path: path.resolve(__dirname, './src/assets/'),
        filename: '[name].js'
    },
    watch: false,
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    "Browserslist": ["last 2 versions", "ie > 10"]
                                }),
                            ]
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
                 use: {
                     loader: 'url-loader', // this need file-loader
                     options: {
                         limit: 50000
 
                     }
                 }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'vue.css',
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        }
    }
};

module.exports = config;
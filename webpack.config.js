const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
    require('dotenv').config({ path: '.env.development' });
}   

module.exports = (env) => {
    const isProduction = env === 'production'; 
    const CSSExtract = new ExtractTextPlugin('styles.css'); 

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: { 
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },{
                        loader: 'sass-loader', 
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            }]
        },
        plugins: [
            CSSExtract,
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            port: 8080,
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};

// loader -> a loader lets you customize the behavior of web pack when it loads a given file. 


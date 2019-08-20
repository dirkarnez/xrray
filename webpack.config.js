const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
   mode: isProduction ? 'production' : 'development',
   entry: './src/index.ts',
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
          },
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
   },
   output: {
      path: resolve(__dirname, 'dist'),
      filename: 'xrray.js',
      library: 'xrray',
      libraryTarget: 'umd'
   }
};


if (isProduction) {
   config.optimization = {
     minimizer: [
       new TerserPlugin(),
     ],
   };
 }

 module.exports = config;
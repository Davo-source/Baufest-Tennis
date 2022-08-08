const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports ={
    //mode: 'development', ESTO SOLO ES SI NO TENEMOS UN DEVSERVER EL CUAL SIRVE PARA UN LIVE RELOAD.
    entry: './src/index.js', //por donde entra al correr
    output: { //por donde sale xD
        filename: 'js/[name].js', //Para que webpack genere un nombre diferente para cada vez que se contruya un bundle.js
        path: path.resolve(__dirname,'public'),//__dirname toma la direccion del archivo
        //resolve une el __dirname con public: 
        //C:\Users\david.oramas\OneDrive - Netlogistik\Documentos\BaufestTennis\Baufest-Tenni\public
        //como path.join, pero resolve se detiene al encontrar un delimitador,
        //delimitador: windows: "/";  linux: "\"
        publicPath: 'http://localhost:3000', //donde pondra todo el choro tus bundles.
    },
  devServer: {
    historyApiFallback: true, //Cuando hay una pagina no encontrada en los archivos y no tirar un 404
    //recurre a alguno de los archivos en el historial para sustituir el error, react-router es ideal. 
    compress: true,
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'], //webpack no sabe que es jsx
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: 'html-loader',
                },
              ],
            },
          ]
        },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: './index.html',
    }),
  ],
};
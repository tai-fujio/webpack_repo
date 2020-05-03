const path = require('path');

module.exports= {
  entry : './src/index.js',
  output: {
    path: path.resolve(__dirname,'./dist'),
    // filename: 'sample.js',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          }
        ],
      },
    ],
  },
}

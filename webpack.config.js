const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    background: './background.js', // точка входа для фонового скрипта расширения
    contentScript: './content.js', // точка входа для скрипта контента расширения
    popup: './popup.js' // точка входа для скрипта всплывающего окна расширения
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // путь для собранных файлов
    filename: '[name].bundle.js' // шаблон для имен выходных файлов, [name] будет заменено на имена точек входа
  },
  module: {
    rules: [
      // добавьте правила для обработки других типов файлов (например, CSS, изображения и т. д.)
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
	optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true, // включает обфускацию и минификацию
          compress: true // включает сжатие кода
        }
      })
    ]
  }
};

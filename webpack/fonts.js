module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader',
          options: {
            name: './css/fonts/[name].[ext]'
          }
        },
      ],
    },
  };
};
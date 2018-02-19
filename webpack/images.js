module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          },
        },
      ],
    },
  };
};
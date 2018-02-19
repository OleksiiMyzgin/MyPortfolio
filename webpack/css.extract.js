const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.styl$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                  options: {
                    sourceMap: true,
                    minimize: true
                }
              },
              {
                loader: 'postcss-loader',
                  options: {
                    sourceMap: true,
                    minimize: true
                }
              },
              {
                loader: 'stylus-loader',
                  options: {
                    sourceMap: true,
                    minimize: true
                }
              }
            ],
          }),
        },
        // {
        //   test: /\.css$/,
        //   include: paths,
        //   use: ExtractTextPlugin.extract({
        //     fallback: 'style-loader',
        //     use: [{
        //       loader: 'css-loader',
        //         options: {
        //           sourceMap: true,
        //           url: false,
        //           minimize: true
        //       }
        //     }]
        //   }),
        // },
      ],
    },
    plugins: [
      new ExtractTextPlugin('./css/[name].css'),
    ],
  };
};
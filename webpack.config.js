import path from 'path';

export function webpackConfig(options) {
  const watch = options.mode === 'development';

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env'],
              },
            }],
        },
      ],
    },
    mode: 'development',
    watch,
    devtool: 'source-map',
    entry: './src/js/formost.js',
    output: {
      filename: 'formost.js',
      path: path.resolve(__dirname, './dist/'),
    },
  };
}

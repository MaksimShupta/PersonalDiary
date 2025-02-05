const path = require('path');

module.exports = {
  entry: './src/main.jsx', // Your main entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory for the bundled files
    filename: 'bundle.js', // The output bundle file
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // This handles .jsx and .js files
        exclude: /node_modules/,
        use: 'babel-loader', // Transpiles JSX to JavaScript
      },
      {
        test: /\.svg$/, // This handles SVG files
        use: ['@svgr/webpack', 'url-loader'], // or 'file-loader' if you prefer
      },
      // You can add other rules for CSS, images, etc.
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.svg'], // Resolves these file extensions
  },
  // Other configurations like devServer or plugins
};
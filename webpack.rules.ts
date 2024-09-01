import type { ModuleOptions } from 'webpack';
import path from "path";

export const rules: Required<ModuleOptions>['rules'] = [
  // For resolving native node modules (.node) files.
  {
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },

  // For resolving ts files
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },

  // For resolving tailwind css
  {
    test: /\.css$/,
    include: path.join(__dirname, 'src/app'),
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  }
];

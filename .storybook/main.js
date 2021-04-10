// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      '@config': path.resolve(__dirname, '..', 'src', 'config'),
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@modules': path.resolve(__dirname, '..', 'src', 'modules'),
      '@locales': path.resolve(__dirname, '..', 'locales'),
      '@routes': path.resolve(__dirname, '..', 'src', 'routes'),
      '@styles': path.resolve(__dirname, '..', 'src', 'styles'),
      '@shared': path.resolve(__dirname, '..', 'src', 'shared'),
      '@std': path.resolve(__dirname, '..', 'src', 'std')
    };

    return config;
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            localIdentName: '[name]__[local]--[hash:base64:5]'
          }
        }
      }
    },
    '@storybook/addon-essentials',
    '@rogal/addon-react-translate'
  ]
};

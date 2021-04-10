import path from 'path';

import initStoryshots, { renderOnly } from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react',
  configPath: path.join(__dirname, '..', '.storybook'),
  test: renderOnly
});

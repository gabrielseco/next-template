import { addDecorator, addParameters } from '@storybook/react';
import { withReactTranslate } from '@rogal/addon-react-translate';
import { withNextRouter } from 'storybook-addon-next-router';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';
import * as nextImage from 'next/image';

import { i18nConfig } from '@config/i18n';

import { Image } from './mocks/Image';

import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  // eslint-disable-next-line react/display-name
  value: (props) => <Image {...props} />
});

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});

initializeWorker();
addDecorator(mswDecorator);

addDecorator(
  withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    push() {}
  })
);

addDecorator(withReactTranslate(i18nConfig));

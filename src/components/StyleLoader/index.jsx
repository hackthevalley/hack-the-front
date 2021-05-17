import importAll from 'import-all.macro';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Helmet from 'react-helmet';

import DeferredStyles from '../DeferredStyles';
import './Core.deferred.scss';
import './Core.module.scss';

const fonts = importAll.sync(
  '../../../node_modules/@htv/ui-kit/assets/fonts/*.{woff2,woff,ttf}',
);

export default function StyleLoader({ children }) {
  useEffect(() => {
    window.requestAnimationFrame(() => {
      document.documentElement.classList.add('animate');
    });
  }, []);

  return (
    <>
      <DeferredStyles styleSheets={[require(`./Core.deferred.scss`)]} />
      <Helmet>
        {Object.values(fonts).map(({ default: font }) => (
          <link
            type={`font/${font.split('.').slice(-1)[0]}`}
            crossOrigin='anonymous'
            rel='preload'
            href={font}
            key={font}
            as='font'
          />
        ))}
      </Helmet>
      {children}
    </>
  );
}

StyleLoader.propTypes = {
  children: PropTypes.node,
};

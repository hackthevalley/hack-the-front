import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import importAll from 'import-all.macro';
import DeferredStyles from '../DeferredStyles';
import './Core.module.scss';

const fonts = importAll.sync(
  '../../../node_modules/@htv/ui-kit/assets/fonts/*.{woff2,woff,ttf}',
);

export default function StyleLoader({ children }) {
  useEffect(() => {
    window.requestAnimationFrame(() => {
      document.body.classList.add('animate');
    });
  }, []);

  return (
    <>
      <DeferredStyles styleSheets={[require(`./Core.deferred.scss`)]} />
      <Helmet>
        {Object.values(fonts).map(({ default: font }) => (
          <link
            type={`font/${font.split('.').slice(-1)[0]}`}
            rel='preload'
            crossorigin
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

import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Toaster } from 'react-hot-toast';

import Footer from '../Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';
import StyleLoader from '../StyleLoader';
import { content, toast, toastContainer } from './Layout.module.scss';

export default function Layout({
  title,
  noNav,
  noFooter,
  noLoader,
  noSeo,
  noToaster,
  children,
}) {
  if (__DEV__) {
    if (!title && !noSeo) {
      throw new Error(`Page needs to have a title`);
    }
  }

  const Component = noLoader ? Fragment : StyleLoader;

  return (
    <Component>
      {!noSeo && <Seo title={title} />}
      {!noToaster && (
        <Toaster
          containerClassName={toastContainer}
          position='bottom-center'
          toastOptions={{
            className: toast,
          }}
        />
      )}
      <Navigation noNav={noNav} />
      <main className={content}>{children}</main>
      {!noFooter && <Footer />}
    </Component>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  noFooter: PropTypes.bool,
  noNav: PropTypes.bool,
  ...Seo.propTypes,
};

import PropTypes from 'prop-types';

import Footer from '../Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';
import StyleLoader from '../StyleLoader';
import { content } from './Layout.module.scss';

export default function Layout({ title, noNav, noFooter, children }) {
  if (__DEV__) {
    if (!title) {
      throw new Error(`Page needs to have a title`);
    }
  }

  return (
    <StyleLoader>
      <Seo title={title} />
      <Navigation noNav={noNav} />
      <main className={content}>{children}</main>
      {!noFooter && <Footer />}
    </StyleLoader>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  noFooter: PropTypes.bool,
  noNav: PropTypes.bool,
  ...Seo.propTypes,
};

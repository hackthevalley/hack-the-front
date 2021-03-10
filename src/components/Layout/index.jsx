import PropTypes from 'prop-types';
import StyleLoader from '../StyleLoader';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Seo from '../Seo';
import './Layout.module.scss';

export default function Layout({ title, children }) {
  if (__DEV__) {
    if (!title) {
      throw new Error(`Page needs to have a title`);
    }
  }

  return (
    <StyleLoader>
      <Seo title={title} />
      <Navigation />
      <main>{children}</main>
      <Footer/>
    </StyleLoader>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  ...Seo.propTypes,
};

import PropTypes from 'prop-types';
import DeferredStyles from '../DeferredStyles';
import Footer from '../Footer';
import Navigation from '../Navigation';
import Seo from '../Seo';
import './Layout.module.scss';

export default function Layout({ title, children }) {
  if (__DEV__) {
    if (!title) {
      throw new Error(`Page needs to have a title`);
    }
  }

  return (
    <>
      <Seo title={title} />
      <DeferredStyles styleSheets={[require(`./Layout.deferred.scss`)]} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  ...Seo.propTypes,
};

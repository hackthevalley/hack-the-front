import Helmet from 'react-helmet';

export default function DeferredStyles({ styleSheets = [] }) {
  if (__DEV__) {
    if (!styleSheets.length) {
      console.warn(
        `Not stylesheets are loaded. Did you forget to remove this?`,
      );
    }
  }
  return (
    <Helmet>
      {styleSheets.map((styleSheet, key) => (
        <link
          onLoad='this.onload=null;this.rel="stylesheet"'
          href={styleSheet}
          rel='preload'
          as='style'
          key={key}
        />
      ))}
    </Helmet>
  );
}

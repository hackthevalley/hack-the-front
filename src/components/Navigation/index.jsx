import { FaBars } from '@react-icons/all-files/fa/FaBars';
import classNames from 'classnames';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';

import { ReactComponent as Logo } from '@htv/ui-kit/assets/logo.svg';
import Button from '@htv/ui-kit/components/Button';
import Text from '@htv/ui-kit/components/Text';

import useMountedAnimations from '../../utils/useMountedAnimations';
import MobileNav from './MobileNav';
import * as styles from './Navigation.module.scss';
import NavigationBar from './NavigationBar';
import navItems from './navItems';

export default function Navigation({ noNav }) {
  const mobileState = useMountedAnimations(`slow`);
  const { site } = useStaticQuery(query);
  const [current, setCurrent] = useState();
  const [animate, setAnimate] = useState();
  const lineProps = Object.assign(
    {},
    current && {
      '--width': current.offsetWidth + `px`,
      '--left': current.offsetLeft + `px`,
    },
  );

  const srProps = Object.assign(
    {},
    mobileState.isShown && {
      tabIndex: -1,
      'aria-hidden': true,
    },
  );

  useEffect(() => {
    const request = window.requestAnimationFrame(() => {
      setAnimate(!!current);
    });
    return () => {
      window.cancelAnimationFrame(request);
    };
  }, [current]);

  return (
    <NavigationBar
      backgroundColor='charcoal'
      as='nav'
      atmosphere={<MobileNav {...mobileState} />}
      before={
        <Link
          className={styles.logoContainer}
          title='Link to homepage'
          {...srProps}
          to='/'
        >
          <Logo className={styles.logo} width='32' />
        </Link>
      }
      center={
        !noNav ? (
          <ul onMouseLeave={() => setCurrent(null)} className={styles.items}>
            {navItems.map(({ text, ...props }, key, { length }) => {
              if (key === length - 1) {
                props.onBlur = () => setCurrent(null);
              }
              return (
                <li
                  onMouseOver={({ currentTarget }) => {
                    if (currentTarget !== current) {
                      setCurrent(currentTarget);
                    }
                  }}
                  key={key}
                >
                  <Text
                    {...props}
                    onFocus={({ currentTarget }) => {
                      const target = currentTarget.parentElement;
                      if (target !== current) {
                        setCurrent(currentTarget);
                      }
                    }}
                    transform='uppercase'
                    lineHeight='normal'
                    className={styles.item}
                    weight='bold'
                    type='body2'
                    {...srProps}
                    as={Link}
                  >
                    {text}
                  </Text>
                </li>
              );
            })}
            <li
              className={classNames(
                animate && styles.line__animated,
                styles.line,
              )}
              style={lineProps}
              aria-hidden='true'
            />
          </ul>
        ) : undefined
      }
      after={
        !noNav ? (
          <>
            <Button
              className={classNames(styles.button, styles.button__mobile)}
              onClick={() => mobileState.setState(true)}
              aria-label='Toggle mobile navigation'
              leftIcon={FaBars}
              color='white'
              type='ghost'
              {...srProps}
            >
              Menu
            </Button>
            <Button
              className={classNames(
                site.siteMetadata.featureFlags.open || styles.button__disabled,
                styles.button__desktop,
                styles.button,
              )}
              to={site.siteMetadata.featureFlags.open ? '/register' : '#'}
              as={Link}
              {...srProps}
            >
              {site.siteMetadata.featureFlags.open
                ? 'Apply Now'
                : 'Coming soon'}
            </Button>
            {site.siteMetadata.featureFlags.mlh && (
              <a
                href='https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white'
                className={styles.bannerContainer}
                rel='noreferrer noopenner'
                target='_blank'
                {...srProps}
              >
                <img
                  src='https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg'
                  alt='Major League Hacking 2022 Hackathon Season'
                  className={styles.banner}
                />
              </a>
            )}
          </>
        ) : undefined
      }
    />
  );
}

const query = graphql`
  {
    site {
      siteMetadata {
        featureFlags {
          open
          mlh
        }
      }
    }
  }
`;

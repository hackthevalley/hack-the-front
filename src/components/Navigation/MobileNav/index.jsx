import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { ReactComponent as Logo } from '@htv/ui-kit/assets/logo.svg';
import Button from '@htv/ui-kit/components/Button';
import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import { logoContainer, logo, button } from '../Navigation.module.scss';
import NavigationBar from '../NavigationBar';
import navItems from '../navItems';
import {
  container,
  container__shown,
  register__disabled,
  register,
  items,
  item,
  text,
  footer,
} from './MobileNav.module.scss';

export default function MobileNav({ isShown, isMounted, setState }) {
  const { site } = useStaticQuery(query);
  return isMounted ? (
    <div className={classNames(container, isShown && container__shown)}>
      <NavigationBar
        before={
          <Link
            onClick={() => setState(false)}
            className={logoContainer}
            title='Link to homepage'
            to='/'
          >
            <Logo className={logo} width='32' />
          </Link>
        }
        after={
          <Button
            onClick={() => setState(false)}
            className={button}
            leftIcon={FaTimes}
            color='white'
            type='ghost'
          >
            Close
          </Button>
        }
      />
      <ul className={items}>
        {navItems.map(({ text: _text, ...props }, key, { length }) => {
          if (key + 1 === length) {
            props.onBlur = () => setState(false);
          }
          return (
            <li key={key}>
              <Link {...props} onClick={() => setState(false)} className={item}>
                <Text
                  className={text}
                  type='heading2'
                  font='secondary'
                  as='span'
                >
                  {_text}
                </Text>
              </Link>
            </li>
          );
        })}
      </ul>
      <Section className={footer} as='div'>
        <Button
          className={classNames(
            site.siteMetadata.featureFlags.open || register__disabled,
            register,
          )}
          to={site.siteMetadata.featureFlags.open ? '/register' : '#'}
          as={Link}
        >
          {site.siteMetadata.featureFlags.open ? 'Register Now' : 'Coming soon'}
        </Button>
      </Section>
    </div>
  ) : null;
}

const query = graphql`
  {
    site {
      siteMetadata {
        featureFlags {
          open
        }
      }
    }
  }
`;

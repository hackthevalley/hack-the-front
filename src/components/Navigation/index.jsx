import { FaBars } from '@react-icons/all-files/fa/FaBars';
import Button from '@htv/ui-kit/components/Button';
import Text from '@htv/ui-kit/components/Text';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import toSvg from 'svgr.macro';
import { Link } from 'gatsby';
import useMountedAnimations from '../../utils/useMountedAnimations';
import MobileNav from './MobileNav';
import navItems from './navItems';
import {
  logoContainer,
  logo,
  items,
  item,
  line,
  lineAnimated,
  button,
  buttonMobile,
  buttonDesktop,
  bannerContainer,
  banner,
} from './Navigation.module.scss';
import NavigationBar from './NavigationBar';

const Logo = toSvg('../../../node_modules/@htv/ui-kit/assets/logo.svg');
export default function Navigation() {
  const mobileState = useMountedAnimations(`slow`);
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
          className={logoContainer}
          title='Link to homepage'
          {...srProps}
          to='/'
        >
          <Logo className={logo} width='32' />
        </Link>
      }
      center={
        <ul onMouseLeave={() => setCurrent(null)} className={items}>
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
                  className={item}
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
            className={classNames(animate && lineAnimated, line)}
            style={lineProps}
            aria-hidden='true'
          />
        </ul>
      }
      after={
        <>
          <Button
            className={classNames(button, buttonMobile)}
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
            className={classNames(button, buttonDesktop)}
            {...srProps}
            disabled
          >
            Coming soon
          </Button>
          <a
            href='https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white'
            className={bannerContainer}
            rel='noreferrer noopenner'
            target='_blank'
            {...srProps}
          >
            <img
              src='https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg'
              alt='Major League Hacking 2021 Hackathon Season'
              className={banner}
            />
          </a>
        </>
      }
    />
  );
}

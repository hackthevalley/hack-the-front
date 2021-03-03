import Section from '@htv/ui-kit/components/Section';
import Button from '@htv/ui-kit/components/Button';
import Text from '@htv/ui-kit/components/Text';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';
import toSvg from 'svgr.macro';
import { Link } from 'gatsby';
import {
  section,
  sectionBefore,
  sectionList,
  sectionAfter,
  item,
  line,
  lineAnimated,
  logo,
  menu,
  button,
  banner,
  banner__content,
} from './Navigation.module.scss';

const Logo = toSvg('../../../node_modules/@htv/ui-kit/assets/logo.svg');
export const items = [
  {
    text: `About`,
    to: `/#about`,
  },
  {
    text: `FAQ`,
    to: `/#faq`,
  },
  {
    text: `Theme`,
    to: `/#factions`,
  },
  {
    text: `Sponsors`,
    to: `/#sponsors`,
  },
];

export default function Navigation() {
  const [current, setCurrent] = useState();
  const [animate, setAnimate] = useState();
  const lineProps = Object.assign(
    {},
    current && {
      '--width': current.offsetWidth + `px`,
      '--left': current.offsetLeft + `px`,
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
    <Section backgroundColor='charcoal' className={section} as='nav'>
      <div className={classNames(sectionBefore, section)}>
        <Link title='Link to homepage' className={logo} to='/'>
          <Logo width='32' />
        </Link>
      </div>
      <ul
        className={classNames(sectionList, section)}
        onMouseLeave={() => setCurrent(null)}
      >
        {items.map(({ text, ...props }, key, { length }) => {
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
                className={item}
                transform='uppercase'
                lineHeight='normal'
                weight='bold'
                type='body2'
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
      <div className={classNames(sectionAfter, section)}>
        <Button
          aria-label='Toggle mobile navigation'
          className={menu}
          leftIcon={FaBars}
          color='white'
          type='ghost'
        >
          Menu
        </Button>
        <Button className={button} disabled>
          Coming soon
        </Button>
        <a
          href='https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white'
          className={banner}
          rel='noreferrer noopenner'
          target='_blank'
        >
          <img
            src='https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg'
            alt='Major League Hacking 2021 Hackathon Season'
            className={banner__content}
          />
        </a>
      </div>
    </Section>
  );
}

import classNames from 'classnames';

import Section from '@htv/ui-kit/components/Section';

import {
  root_container,
  container,
  section,
  section__before,
  section__center,
  section__after,
} from './NavigationBar.module.scss';

export default function NavigationBar({
  className,
  before,
  center,
  after,
  ...props
}) {
  return (
    <Section
      {...props}
      className={classNames(className, container)}
      rootClassName={classNames(root_container)}
    >
      {before && (
        <div className={classNames(section, section__before)}>{before}</div>
      )}
      {center && (
        <div className={classNames(section, section__center)}>{center}</div>
      )}
      {after && (
        <div className={classNames(section, section__after)}>{after}</div>
      )}
    </Section>
  );
}

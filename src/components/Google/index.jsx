import classNames from 'classnames';

import Button from '@htv/ui-kit/components/Button';

import { ReactComponent as GoogleIcon } from '../../images/oauth-icons/google.svg';
import { button, icon } from './Google.module.scss';

export default function Google({ className, ...props }) {
  return (
    <Button
      {...props}
      leftIcon={() => <GoogleIcon className={icon} />}
      className={classNames(className, button)}
      color='white'
    />
  );
}

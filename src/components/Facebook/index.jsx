import { FaFacebookSquare } from '@react-icons/all-files/fa/FaFacebookSquare';
import classNames from 'classnames';

import Button from '@htv/ui-kit/components/Button';

import { button, icon } from './Facebook.module.scss';

export default function Facebook({ className, ...props }) {
  return (
    <Button
      {...props}
      leftIcon={() => <FaFacebookSquare className={icon} />}
      className={classNames(className, button)}
    />
  );
}

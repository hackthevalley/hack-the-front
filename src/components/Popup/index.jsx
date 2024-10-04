import { FaTimes } from '@react-icons/all-files/fa/FaTimes';
import classNames from 'classnames';
import { useState, useEffect, useRef } from 'react';

import Button from '@htv/ui-kit/components/Button';
import Text from '@htv/ui-kit/components/Text';

import { backdrop, box, button, header, animated } from './Popup.module.scss';

export default function Popup({
  description,
  label,
  show = false,
  onClose = () => {},
}) {
  const { mounted, shown } = useMountedTransitions(show, 350);

  return (
    mounted && (
      <div className={classNames(shown && animated, backdrop)}>
        <div className={box}>
          <div className={header}>
            <Text type='heading2' color='lime' font='secondary' as='p'>
              {label}
            </Text>
            <Button
              onClick={onClose}
              className={button}
              leftIcon={FaTimes}
              color='white'
              type='ghost'
            >
              Close
            </Button>
          </div>
          <Text type='body1' font='secondary' as='p'>
            {description}
          </Text>
        </div>
      </div>
    )
  );
}

// TODO: Abstract this hook to be part of  HTV UI-Kit
function useMountedTransitions(initState, delay) {
  const [pre, setPre] = useTwoWayState(initState);
  const [post, setPost] = useState(initState);
  const _delay = useRef(delay);

  useEffect(() => setPre(initState), [initState]);
  useEffect(() => {
    const timer = window.setTimeout(
      () => setPost(pre),
      pre ? 0 : _delay.current,
    );
    return () => window.clearTimeout(timer);
  }, [pre]);

  return {
    setState: setPre,
    shown: pre && post,
    mounted: pre || post,
  };
}

function useTwoWayState(initState) {
  const [state, setState] = useState(initState);
  useEffect(() => {
    if (state === initState) return;
    setState(initState);
  }, [state, initState]);

  return [state, setState];
}

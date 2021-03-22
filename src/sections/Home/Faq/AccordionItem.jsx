import { useState } from 'react';
import classNames from 'classnames';
import Card from '@htv/ui-kit/components/Card';
import Text from '@htv/ui-kit/components/Text';
import {
  icon,
  iconDown,
  wrapCard,
  wrapContent,
  wrappingDiv,
  wrappingText,
  hiddenDiv,
} from './AccordionItem.module.scss';

export default function AccordionItem(props) {
  const [expand, setExpand] = useState(false);
  return (
    <div className={wrappingDiv}>
      <Card type='flat' backgroundColor='darkviolet' className={wrapCard}>
        <Text
          type='body1'
          transform='uppercase'
          weight='normal'
          className={wrappingText}
          onClick={() => setExpand(!expand)}
        >
          <Text
            type='body1'
            as='span'
            className={classNames(expand && iconDown, icon)}
          >
            &gt;
          </Text>
          &nbsp;{props.title}
        </Text>
        <div className={`${!expand ? hiddenDiv : wrapContent}`}>
          {props.content}
        </div>
      </Card>
    </div>
  );
}

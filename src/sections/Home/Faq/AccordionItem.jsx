import { useState } from 'react';
import Card from '@htv/ui-kit/components/Card';
import Text from '@htv/ui-kit/components/Text';
import {
  icon,
  iconDown,
  wrapCard,
  wrapContent,
  wrappingDiv,
  wrappingText,
} from './AccordionItem.module.scss';

export default function AccordionItem(props) {
  const [expand, setExpand] = useState(false);
  return (
    <div className={wrappingDiv}>
      <Card
        backgroundColor='darkviolet'
        className={wrapCard}
        onClick={() => setExpand((expand) => !expand)}
      >
        <Text
          type='body1'
          transform='uppercase'
          weight='normal'
          className={wrappingText}
        >
          <Text
            type='body1'
            as='span'
            className={`${!expand ? { icon } : { iconDown }}`}
          >
            &gt;
          </Text>
          &nbsp;{props.title}
        </Text>
        {expand && <div className={wrapContent}>{props.content}</div>}
      </Card>
    </div>
  );
}

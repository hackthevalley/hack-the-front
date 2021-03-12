import { useState } from 'react';
import Card from '@htv/ui-kit/components/Card';
import Text from '@htv/ui-kit/components/Text';
import { icon, iconDown, wrapCard, wrapContent } from './Faq.module.scss';

export default function AccordionItem(props) {
  const [expand, setExpand] = useState(false);
  return (
    <div style={{ paddingTop: '34px' }}>
      <Card
        backgroundColor='darkviolet'
        className={wrapCard}
        onClick={() => setExpand((expand) => !expand)}
      >
        <Text
          type='body1'
          transform='uppercase'
          weight='normal'
          style={{ paddingLeft: '28px', paddingTop: '46px' }}
        >
          <Text
            type='body1'
            as='span'
            className={`icon${!expand ? 'Down' : ''}`}
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

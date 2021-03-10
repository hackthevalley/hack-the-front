import Card from '@htv/ui-kit/components/Card';
import Text from '@htv/ui-kit/components/Text';
import {
  accordionItemIcon,
  accordionItemContent,
  accordionItemInner,
  wrapCard,
} from './Faq.module.scss';

export default function AccordionItem(props) {
  return (
    <div style={{ paddingTop: '34px' }}>
      <Card backgroundColor='darkviolet' className={wrapCard}>
        <Text
          type='body1'
          transform='uppercase'
          weight='normal'
          style={{ paddingLeft: '38px', paddingTop: '46px' }}
        >
          <span>&gt;</span> {props.title}
        </Text>
        <div
          style={{ paddingLeft: '38px', width: '385px', paddingTop: '72px' }}
        >
          {props.content}
        </div>
      </Card>
    </div>
  );
}

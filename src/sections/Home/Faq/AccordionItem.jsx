import Card from '@htv/ui-kit/components/Card';
import {
  accordionItemIcon,
  accordionItemContent,
  accordionItemInner,
} from './Faq.module.scss';

export default function AccordionItem() {
  state = {
    opened: false,
  };

  const {
    props: { title, content },
    state: { opened },
  } = this;

  const onClick = () => {
    this.setState({ opened: !opened });
  };

  const className = `accordionItem ${opened && accordionItemOpened}`;

  return (
    <Card
      backgroundColor='#272532'
      style={{ width: '465px', minHeight: '120px' }}
    >
      <div className={className} onClick={onClick}>
        <span className={accordionItemIcon}>&gt;</span>
        <Text type='body1' transform='uppercase'>
          {title}
        </Text>
      </div>
      <div className={accordionItemInner}>
        {content.map((portion, i) => {
          return (
            <div className={accordionItemContent} key={i}>
              {portion}
            </div>
          );
        })}
      </div>
    </Card>
  );
}

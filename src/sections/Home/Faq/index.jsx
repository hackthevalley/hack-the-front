import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { Faqs } from './data';
import AccordionItem from './AccordionItem';

export default function Faq() {
  return (
    <Section backgroundColor='darkviolet'>
      <Text type='heading2' color='#312F3F'>
        console.log(“
        <span style={{ color: 'white' }}>Frequently Asked Questions</span>”)
        <div>
          {Faqs.map((faq, i) => {
            return <AccordionItem {...faq} />;
          })}
        </div>
      </Text>
    </Section>
  );
}

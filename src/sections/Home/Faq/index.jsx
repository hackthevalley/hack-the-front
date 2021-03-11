import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { Faqs } from './data';
import AccordionItem from './AccordionItem';
import { wrapAccordion } from './Faq.module.scss';

export default function Faq() {
  return (
    <Section backgroundColor='charcoal'>
      <Text type='heading2' color='darkviolet'>
        console.log(“
        <Text type='heading2' as='span'>
          Frequently Asked Questions
        </Text>
        ”)
        <div className={wrapAccordion}>
          <AccordionItem title={Faqs[0].title} content={Faqs[0].content} />
          <AccordionItem title={Faqs[1].title} content={Faqs[1].content} />
          <AccordionItem title={Faqs[2].title} content={Faqs[2].content} />
          <AccordionItem title={Faqs[3].title} content={Faqs[3].content} />
          <AccordionItem title={Faqs[4].title} content={Faqs[4].content} />
          <AccordionItem title={Faqs[5].title} content={Faqs[5].content} />
        </div>
      </Text>
    </Section>
  );
}

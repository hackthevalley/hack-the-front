import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';
import { Faqs } from './data';
import AccordionItem from './AccordionItem';
import transparentQM from '../../../images/transparent-question-marks.svg';
import filledQM from '../../../images/filled-question-marks.svg';
import {
  wrapAccordion,
  transparentQMStyle,
  filledQMStyle,
  wrapDiv,
  titleStyle,
} from './Faq.module.scss';

export default function Faq() {
  return (
    <Section
      backgroundColor='charcoal'
      atmosphere={
        <div className={wrapDiv}>
          <img
            src={transparentQM}
            alt='Transparent question marks'
            className={transparentQMStyle}
          />
          <img
            src={filledQM}
            alt='Filled question marks'
            className={filledQMStyle}
          />
        </div>
      }
    >
      <Text type='body1' color='darkviolet' className={titleStyle}>
        console.log(“
        <Text type='body1' as='span'>
          Frequently Asked Questions
        </Text>
        ”)
      </Text>
      <div className={wrapAccordion}>
        {Faqs.map((faq) => {
          return <AccordionItem {...faq} key={faq.id} />;
        })}
      </div>
    </Section>
  );
}

import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text';

import { container, content } from './Loading.module.scss';

export default function PromptPage({
  description,
  isLoading,
  children,
  title,
}) {
  return isLoading ? (
    <div className={container}>
      <Section className={content} backgroundColor='charcoal'>
        <Text align='center' type='heading1'>
          {title}
        </Text>
        <Text align='center' type='body1' color='gray'>
          {description}
        </Text>
      </Section>
    </div>
  ) : (
    children
  );
}

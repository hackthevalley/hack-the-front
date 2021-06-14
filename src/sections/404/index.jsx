import Section from "@htv/ui-kit/components/Section";
import Button from '@htv/ui-kit/components/Button';
import Text from "@htv/ui-kit/components/Text";
import { Link } from "gatsby";
import { container, content, button } from './404.module.scss';

export default function NotFoundRoot() {
  return (
    <div className={container}>
      <Section className={content} backgroundColor='charcoal'>
        <Text align='center' type='heading1'>Page not fowound</Text>
        <Text align='center' type='body1' color='gray'>
          Looks like the pwage you're looking for doesn't exist. *Sad owo sounds*
        </Text>
        <Button className={button} as={Link} to='/'>
          Back to home
        </Button>
      </Section>
    </div>
  );
}

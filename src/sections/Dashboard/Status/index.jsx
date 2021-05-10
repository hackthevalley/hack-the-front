import Text from '@htv/ui-kit/components/Text'
import Card from '@htv/ui-kit/components/Card'
import Button from '@htv/ui-kit/components/Button'
import {
    statusText,
    submittedText,
    applicationButton,
    appDueText
} from './Status.module.scss';

export default function Status() {
    return (
        <Card>
            <Text className={statusText} lineHeight='relaxed' align='start' type='body1'>
                Current Application Status
            </Text>
            <Text className={submittedText} lineHeight='relaxed' align='start' type='heading2'>
                Submitted!
                <Button className={applicationButton}>
                    View Application
                </Button>
            </Text>
            <Text className={appDueText} lineHeight='relaxed' align='start' type='body2'>
                Application due on 
                <Text lineHeight='relaxed' align='start' type='body2'>
                    &nbsp;September XX, 2021
                </Text>
            </Text>
        </Card>
    );
}
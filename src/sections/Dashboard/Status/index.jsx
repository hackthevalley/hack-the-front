import Text from '@htv/ui-kit/components/Text'
import Card from '@htv/ui-kit/components/Card'
import Button from '@htv/ui-kit/components/Button'
import {
    submittedText,
    acceptedText,
    declinedText,
    statusText,
    applicationButton,
    appDueText
} from './Status.module.scss';

function CurrentStatus(prop) {
    if (prop.status == "submitted") {
        return (
            <Text className={submittedText} lineHeight='relaxed' align='start' type='heading2'>
                Submitted!
                <Button className={applicationButton}>
                    View Application
                </Button>
            </Text>
        );
    } else if (prop.status == "notSubmitted") {
        return (
            <Text className={submittedText} lineHeight='relaxed' align='start' type='heading2'>
                Not Submitted.
                <Button className={applicationButton}>
                    Start Application
                </Button>
            </Text>
        );
    } else if (prop.status == "accepted") {
        return (
            <Text className={acceptedText} lineHeight='relaxed' align='start' type='heading2'>
                ACCEPTED!
                <Button className={applicationButton}>
                    View Application
                </Button>
            </Text>
        );
    } else if (prop.status == "declined") {
        return (
            <Text className={declinedText} lineHeight='relaxed' align='start' type='heading2'>
                Declined.
                <Button className={applicationButton}>
                    View Application
                </Button>
            </Text>
        );
    }
}

export default function Status() {
    return (
        <Card>
            <Text className={statusText} lineHeight='relaxed' align='start' type='body1'>
                Current Application Status
            </Text>
            <CurrentStatus status="submitted" />
            <Text className={appDueText} lineHeight='relaxed' align='start' type='body2'>
                Application due on 
                <Text lineHeight='relaxed' align='start' type='body2'>
                    &nbsp;September XX, 2021
                </Text>
            </Text>
        </Card>
    );
}
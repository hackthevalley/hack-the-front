import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text'
import Button from '@htv/ui-kit/components/Button'
import { useState } from 'react'
import { Link } from "gatsby"
import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack'
import {
    container,
    backButton,
    header,
    signIn,
    body,
    npm,
    socials,
    line,
    forgotPassword,
    signUp,
    content,
    forgotLink,
    registerLink,
    signButton,
    userBox,
    passwordBox,
    space
} from './Login.module.scss';

export default function Login() {
    // helper for setting username and password
    function useInput(initValue) {
        const [value, setValue] = useState(initValue);

        function handleChange(event) {
            setValue(event.target.value);
        }

        return [value, handleChange];
    }

    const [username, setUsername] = useInput('');
    const [password, setPassword] = useInput('');

    function sendInfo(event) {
        event.preventDefault();
        console.log("password and username sent here..")
    }

    return (
        <div className={container}>
            <Section className={content} backgroundColor='charcoal'>
                <div className={header}>
                    <Button
                        className={backButton}
                        leftIcon={IoChevronBack}
                        color='white'
                        type='ghost'
                        as={Link}
                        to='/'
                    >
                        <Text type='meta1' as='span' color='white'>
                            Back to website
                        </Text>
                    </Button>
                </div>
                <div className={body}>
                    <Text className={npm} type='body1' color='gray' as='p'>
                        npm start challenge
                    </Text>
                    <div>
                        <Text font='secondary' type='heading2' weight='normal'>Welcome,</Text>
                        <Text font='secondary' type='body1'>Sign in to view dashboard</Text>
                        <div className={socials}>
                            <Button>Google</Button>
                            <Button>Facebook</Button>
                        </div>
                    </div>
                    <hr className={line}/>
                    <form onSubmit={sendInfo}>
                            <div>
                                <Text font='secondary' lineheight='spaced' type='body2'>Username</Text>
                                <div className={userBox}/>
                            </div>
                            <div className={space}>
                                <Text font='secondary' lineheight='spaced' type='body2'>Password</Text>
                                <div className={passwordBox}/>
                            </div>
                            <Text 
                                className={forgotPassword} 
                                font='secondary'
                                lineheight='normal' 
                                type='meta1'>
                                    {<Link className={forgotLink} to='/register'>Forgot Password?</Link>}
                                </Text>
                            <div className={signButton}>
                                <Button 
                                className={signIn}
                                > Sign in </Button>
                            </div>
                            <Text
                                font='secondary'
                                lineheight='normal'
                                type='body2'
                                className={signUp}> 
                                Don't have an account? 
                               {<Link to='/register' className={registerLink}>Sign up</Link>}</Text>
                    </form>
                </div>
            </Section>
        </div>
    )
}
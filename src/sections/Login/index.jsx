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
    emailInput,
    forgotPassword,
    signUp,
    content,
    forgotLink,
    registerLink
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
                        <div class={socials}>
                            <Button>Google</Button>
                            <Button>Facebook</Button>
                        </div>
                    </div>
                    <hr className={line}/>
                    <form onSubmit={sendInfo}>
                            <input
                                type='text'
                                placeholder='Micheal@Reeves.com'
                                id='username'
                                value={username}
                                onChange={setUsername}
                                className={emailInput} />
                            <Text lineheight='spaced' type='body2'>Password</Text>
                            <input
                                type='password'
                                value={password}
                                placeholder='<insert> password here </insert>'
                                onChange={setPassword} />
                            <Text className={forgotPassword} lineheight='normal' type='body2'>{<Link className={forgotLink} to='/register'>Forgot Password?</Link>}</Text>
                            <Button className={signIn}> Sign in </Button>
                            <Text
                                lineheight='normal'
                                type='body2'
                                className={signUp}> Don't have an account? {<Link to='/register' className={registerLink}>
                                    <Text lineheight='spaced'
                                        type='body2'
                                        color='Cactus' as='span'>
                                        Sign up
                                                                                </Text>
                                </Link>}</Text>
                    </form>
                </div>
            </Section>
        </div>
    )
}
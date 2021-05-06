import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text'
import Button from '@htv/ui-kit/components/Button'
import { useState } from 'react'
import { Link } from "gatsby"
import { IoChevronBack } from '@react-icons/all-files/io5/IoChevronBack'
import { 
    loginForm,
    backPage,
    centerLogin,
    backLink,
    signIn,
    emailInput,
    forgotPassword,
    signUp,
    forgotLink,
    registerLink } from './Login.module.scss'
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
        <Section backgroundColor='charcoal'>
        <div className={backLink}>
            <a href='/' className={backPage}>
                <IoChevronBack/>
                <Text lineheight='spaced' type='meta1'> Back to website</Text>
            </a>
        </div>
        {/* Login information below */}
        <form className={loginForm} onSubmit={sendInfo}>
            <div className={centerLogin}>
                
                <Text lineheight='normal' type='meta1'> $ npm start challenge</Text>
                <Text lineheight='spaced' type='body1'>Welcome,</Text>
                <Text lineheight='spaced' type='body1'>Sign in to view dashboard</Text>
                <Text lineheight='normal' type='body2'>Email Address</Text>
                <input 
                    type='text' 
                    placeholder='Micheal@Reeves.com' 
                    id='username'  
                    value={username} 
                    onChange={setUsername}
                    className={emailInput}/>
                <Text lineheight='spaced' type='body2'>Password</Text>
                <input 
                    type='password' 
                    value={password} 
                    placeholder='<insert> password here </insert>' 
                    onChange={setPassword}/>
                <Text className={forgotPassword} lineheight='normal' type='body2'>{<Link className={forgotLink} to='/register'>Forgot Password?</Link>}</Text>
                <Button className={signIn}> Sign in </Button>
                <Text 
                lineheight='normal' 
                type='body2'
                className={signUp}> Don't have an account? {<Link to='/register' className={registerLink}>
                                                                <Text lineheight='spaced'
                                                                      type='body2' 
                                                                      color='Cactus'>
                                                                        Sign up
                                                                        </Text> 
                                                            </Link>}</Text>
            </div>
        </form>
        </Section>
    )
}
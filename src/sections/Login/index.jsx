import Section from '@htv/ui-kit/components/Section';
import Text from '@htv/ui-kit/components/Text'
import { useState } from 'react'
import { Link } from "gatsby"

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
            {/* Logo goes here. */}
            {/* TODO: A back arrow shape here */}
            <Text lineheight='normal' type='meta1'> Back to website</Text>
            <Text lineheight='normal' type='meta1'> $ npm start challenge</Text>
            {/* TODO: Must add Sign Ins for Google and Facebook here. */}
            {/* Login information below */}
            <form onSubmit={sendInfo}>
                <label>Username</label>
                <input type='text' placeholder='Micheal@Reeves.com' id='username' value={username} onChange={setUsername}/>
                <label>Password</label>
                <input type='password' value={password} placeholder='<insert> password here </insert>' onChange={setPassword}/>
                <input type='submit' value="Sign in"/>
            </form>
            <Text lineheight='normal' type='body2'>{<Link to='/forgot'>Forgot Password?</Link>}</Text>
            <Text lineheight='normal' type='body2'> Don't have an account? {<Link to='/register'>Sign up</Link>}</Text>
        </Section>
    )
}
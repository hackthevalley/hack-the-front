import Section from '@htv/ui-kit/components/Section';
import './Login.module.scss';
import LoginGoogle from './Google';
import LoginFacebook from './Facebook';

function Login() {
    return (
        <Section backgroundColor='charcoal'>
         <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <LoginGoogle/>
            <LoginFacebook/>
         </div>
        </Section>
    )
}

export default Login;
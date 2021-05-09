import {useGoogleLogin} from 'react-google-login';
import {btngoogle, googletext} from './Login.module.scss';
import Text from '@htv/ui-kit/components/Text';
import { ReactComponent as GoogleIcon } from '../../images/social-icons/google.svg';

const clientId = '938846139481-pn44vt5l45emhv9qjl7km2cgalnpd255.apps.googleusercontent.com';

function LoginGoogle() {
    const onSuccess = (res) => {
        console.log('Login Success. Current User: ', res.profileObj);
    };

    const onFailure  = (res) => {
        console.log('Login Failed. res: ', res);
    };

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
    });

    return (
        <button onClick={signIn} className={btngoogle}>
        <GoogleIcon/>
        <Text className={googletext}
        rel='noreferrer noopener'
        target='_blank'
        color='grey'
        type='meta1'
        > Sign in with Google</Text>
        </button>
    );
}

export default LoginGoogle;
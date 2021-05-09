import FacebookLogin from 'react-facebook-login';
import Text from '@htv/ui-kit/components/Text';
import {btnfb, fbtext} from './Login.module.scss';

function LoginFacebook() {
   
    const response = (res) => {
        console.log(res);
    }

    return (
        <div>
            <FacebookLogin
                appId=""
                autoLoad={true}
                fields="name, email, picture"
                callback={response}
                cssClass={btnfb}
                icon="fa-facebook-square"
                textButton={<Text
                    className={fbtext}
                    rel='noreferrer noopener'
                    target='_blank'
                    color='white'
                    type='meta1'
                    as='a'
                  >Sign in with Facebook</Text>}
            />
        </div>
    );

}

export default LoginFacebook;

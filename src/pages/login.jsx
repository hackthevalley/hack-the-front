import Login from '../sections/Login';
import Layout from '../components/Layout'

export default function LoginPage() { 
    return(
        <Layout title="Login" noNav noFooter>
            <Login />
        </Layout>
    )
}

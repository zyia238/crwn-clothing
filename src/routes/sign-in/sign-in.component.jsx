import  SignUp  from '../../components/sign-up/sign-up.component'
import  SignInForm  from '../../components/sign-in-form/sign-in-form.component'

import './sign-in.styles.scss'

const SignIn = () => {
    return <div className='authentication-container'>
        <SignInForm />
        <SignUp />
    </div>
}

export default SignIn
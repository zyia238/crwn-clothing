import { signInWithGooglePop , createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import  SignUp  from '../../components/sign-up/sign-up.component'

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePop()

        const { user } = response

        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(userDocRef)
    }
    return <>
        sign in page
        <button onClick = {logGoogleUser}> click</button>
        <SignUp />
    </>
}

export default SignIn
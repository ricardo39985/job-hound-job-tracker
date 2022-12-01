import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [showLogin, setshowLogin] = useState(false)
    return (
        <main>
            <h1>AuthPage</h1>
            {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            {showLogin ? <button onClick={()=>setshowLogin(!showLogin)}>Dont have an account?<p><small>Sing up here</small></p></button> : <button onClick={()=>setshowLogin(!showLogin)}>Login Instead</button>}


        </main>
    )
}

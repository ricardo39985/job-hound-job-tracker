// Rewrite the SignUpForm as a function component
import { useState } from 'react'
import { signUp } from '../../utilities/users-service'

export default function SignUpForm({ setUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })
    const disable = formData.password !== formData.confirm;

    function handleChange(evt) {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            error: ''
        })
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        try {
            const formDataCopy = { ...formData }
            delete formDataCopy.error
            delete formDataCopy.confirm
            const user = await signUp(formDataCopy)
            setUser(user)
        } catch {
            setFormData({
                ...formData,
                error: 'Sign Up Failed - Try Again'
            })
        }
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="form-container flex flex-col w-[20%] mx-auto outline outline-blue-500 outline-[1px] ">
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                    </div>
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </div>
            </form>
            <p className="error-message">&nbsp;{formData.error}</p>
        </div>
    )
}

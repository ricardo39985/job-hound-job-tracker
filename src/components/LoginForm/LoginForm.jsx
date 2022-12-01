// LoginForm.jsx
import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='mt-[18px]'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-container flex flex-col w-[20%] mx-auto outline outline-blue-500 outline-[1px]">
          <div className='mb-8'>

            <label className='mr-6'>Email</label>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          </div>
          <div>
            <label className='mr-6'>Password</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button type="submit" className='bg-blue-500 w-[50%] mx-auto mt-8 mb-4 rounded-md text-xl'>LOG IN</button>
        </div>
      </form>
      <p className="error-message text-red-600">&nbsp;{error}</p>
    </div>
  );
}

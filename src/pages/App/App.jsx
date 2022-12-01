import { useState } from 'react'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import Dashboard from '../../components/Dashboard/Dashboard';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Dashboard/>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}



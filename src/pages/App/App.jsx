import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
// import ResultsPage from '../ResultsPage/ResultsPage'
import NavBar from '../../components/NavBar/NavBar'
import ResultsPage from '../Results Page/ResultsPage';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser}/>} /> */}
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

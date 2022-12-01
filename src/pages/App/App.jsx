import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import ResultsPage from '../ResultsPage/ResultsPage';
import SavedNamesPage from '../SavedNamesPage/SavedNamesPage'
import NotesPage from '../NotesPage/NotesPage'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/savedNames" element={<SavedNamesPage />} />
            <Route path="/savedNames/:id" element={<NotesPage />}/>
            <Route path="/*" element={<ResultsPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

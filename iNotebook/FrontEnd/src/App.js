import React from 'react'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoteState from './context/notes/NoteState'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/about'><About /></Route>
            <Route exact path='/contact'><Contact /></Route>
            <Route exact path='/signin'><SignIn /></Route>
            <Route exact path='/signup'><SignUp /></Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  )
}

export default App

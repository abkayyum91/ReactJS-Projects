import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#101732';
      showAlert('success', 'Dark mode is enabled.');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode is enabled.')
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };


  return (
    <>
      <Router>
        <Navbar title="Text Utils" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <TextForm title="Analyze text to convert in UpperCase, LowerCase, Remove ExtraSpace, and more" mode={mode} showAlert={showAlert} />
            </div>
          </Route>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/contact">
            <Contact mode={mode} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

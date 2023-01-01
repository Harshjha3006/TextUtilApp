import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been enabled','success')
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled','success')

    }
  }
  return (
    <>
    <Router>
    <Navbar mode ={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <Routes>
    <Route exact path = "/" element = { <TextForm mode = {mode} showAlert = {showAlert}/>}></Route>
    <Route exact path = "/about" element = {<About mode = {mode}/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;

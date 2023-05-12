
import { useState } from 'react';
import './App.css';
//  import About from './components/About';
import Navbar from './components/Navbar';
 import Textform from './components/Textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');//whether dark mode is enabled or not
  const[alert, setAlert]= useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
       if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled","success");
        //document.title = 'TextUtils - DarkMode';
       }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled","success");
        //document.title = 'TextUtils - LightMode';
      }
  }
  return (
   <>
   {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>
   <Navbar/> */}
   {/* <Router> */}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
    <div className="container my-3">
   {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
          {/* </Route>
   </Switch> */}
   {/* <About/> */}
   </div>
   {/* </Router> */}
 
  </>
  );
 }

export default App;

import React,{useState} from 'react'
import'./App.css'
import Login from './Component/Login'
import Register from './Component/Register'
const App = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName)=>{
    setCurrentForm(forName)
  };
  return (
    <div className='App'>
    {
      currentForm === "login" ? <Login onFormSwitch={toggleForm}/> :<Register onFormSwitch={toggleForm}/>
    }
    
    </div>
  )
}

export default App
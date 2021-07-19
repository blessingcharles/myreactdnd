import { useState } from 'react';

import './App.css';

function App() {

  const [isPhoneNumber , setPhoneNumber ] = useState(false);
  const [isEmail , setEmail] = useState(true);

  const emailHandler = ()=>{
    setEmail(prev =>{
      return !prev
    })
  }

  const phoneHandler = ()=>{
      setPhoneNumber(prev =>{
        return !prev
      })
  }
  
  return (
    <>

     <i>Email :</i><input type="checkbox" checked={isEmail} onClick={emailHandler}/>
     <i>PhoneNumber : </i><input type="checkbox" checked={isPhoneNumber} onClick={phoneHandler}/> 
     <div className="login-page" >
            <div className="form">
                 <form className="login-form characters">
                   
                 <div className="container">
                    <p className="draggable" draggable="true">
                     { 
                                    (isEmail)?<input type="text" placeholder="Email"/>:null
                                  }

                                  <input type="password" placeholder="Password"/>
                    </p>
                    <p className="draggable" draggable="true">
                                   { (isPhoneNumber)?
                                  <input type="text" placeholder="Phone Number" />:null
                                  }
                    </p>
                  </div>

                       <button>Login</button>
                        <p className="message">New User ? <a href="#">SignUp</a></p>
                 </form>
      </div>
      </div>
  </>
  );

}

export default App;

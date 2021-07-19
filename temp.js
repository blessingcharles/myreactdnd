import { useState } from 'react';
import {DragDropContext , Droppable , Draggable} from 'react-beautiful-dnd'
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
    <div>
     
        <i>Email :</i><input type="checkbox" checked={isEmail} onClick={emailHandler}/>
        <i>PhoneNumber : </i><input type="checkbox" checked={isPhoneNumber} onClick={phoneHandler}/>
            <DragDropContext>
              <Droppable droppableId="characters">
                  {(provided)=>(
            <div class="login-page"  {...provided.droppableProps} ref={provided.innerRef} >
              <div class="form">
                
                      {/* <form class="login-form characters"> */}
                          <Draggable key="1" draggableId="1" index="10" disableInteractiveElementBlocking={true}>

                              {(provided)=>(
                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                  {/* { 
                                    (isEmail)?<input type="text" placeholder="email"/>:null
                                  }

                                  <input type="password" placeholder="password"/> */}
                                   { 
                                    (isEmail)?<h4>Email</h4>:null
                                  }
                                  <h4>Password</h4>
                                </li>
                              )}

                          </Draggable>

                          <Draggable key="2" draggableId="2" index="20" disableInteractiveElementBlocking={true}>
                            {
                              ()=>(
                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                  {/* { (isPhoneNumber)?
                                  <input type="text" placeholder="Phone Number" />:null
                                  } */}
                                   { (isPhoneNumber)?
                                  <h4>Number</h4>:null
                                  }
                                </li>
                              )}
                          </Draggable>
                          <button>Login</button>
                          <p class="message">New User ? <a href="#">SignUp</a></p>

                      {/* </form>
                   */}
                
              </div>
          </div>
           )}
            </Droppable>
            </DragDropContext>
   </div>
  );

}

export default App;

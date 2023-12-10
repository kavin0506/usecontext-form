
import './App.css';
import Form from './Form';
import React from 'react';
import { context } from './Contextpage';
import Homepage from './Homepage';
import Login from './Login';
import { useState } from 'react';

function App() {

  const[name,setname]=useState("")
  const[price,setprice]=useState("")
  const[quan,setquan]=useState("")
  const[descripition,setdescription]=useState("")
  const[submit,setsubmit]=useState(false)
  


  return (
    <div className="App">
      <context.Provider  value={{name,setname,price,setprice,quan,setquan,descripition,setdescription,submit,setsubmit}}>
        {
          submit?<Homepage/>:<Login/>
        }

      </context.Provider>
      <Form/>
    </div>
  );
}

export default App;

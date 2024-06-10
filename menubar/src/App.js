import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let [state, setstate] = useState(false);
  let [statex, setstatex] = useState(false);
  return (
    <div className='App'>
 
      
      <button className='enquire'  onClick={() => setstatex(true)}>
          Enquirey Now
        </button>
      

      <div className={`log ${(statex) ? 'activelog' : ''}`}>

      </div>

      <div className={`model ${(statex) ? 'showmodel' : ''}`}>
        <h3>  Enquirey Now <span onClick={() => setstatex(false) }>&times;</span></h3>
      </div>
      <button onClick={()=>setstate(!state)}>
       
      {
        (state)
         ?
         <span>&times;</span>
         :
            <span>&#9776;</span>
      }
      </button>
      
      <div className={`menu ${ (state) ? 'activemenu' : ''}`}>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>

    </div>
      
    </div>
  );
}

export default App;

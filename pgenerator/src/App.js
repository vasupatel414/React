import './App.css';
import { useState } from 'react';
import { UC, LC, SC, NC } from './data/passchar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  let [uppercase, setuppercase] = useState(false)
  let [lowercase, setlowercase] = useState(false)
  let [number, setnumber] = useState(false)
  let [special, setspecial] = useState(false)
  let [passlength,setpasslength]=useState(10)
  let [fpass,setfpass]=useState('')

  let createpassword = () => {
    let charset = ''
    let finalpass=''
    if (uppercase || lowercase || number || special) {
      if (uppercase) charset += UC;
      if (lowercase) charset += LC;
      if (number) charset += NC;
      if (special) charset += SC;

      for(let i=0;i<passlength;i++)
        {
          finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
          setfpass(finalpass)
        }
    }
    else {
      toast.error("please select one checkbox")
    }
  }
let copy=()=>{
  navigator.clipboard.writeText(fpass)
  toast.success("Password copied!!!")
}


  return (
    <div className="password-box">
      <h2>Password Generator</h2>

      <div className='passwordboxin'>
        <input type='text' value={fpass} readOnly /><button className='btn2' onClick={copy}  >copy</button>
      </div>
      <ToastContainer />
      <div className='passlength'>
        <label>Password Length</label>
        <input type='number' value={passlength} max={20} min={10} onChange={(event)=>setpasslength(event.target.value)}/>
      </div>
      <div className='passlength'>
        <label>Include Uppercase Letters</label>
        <input type='checkbox' checked={uppercase} onChange={() => setuppercase(!uppercase)} />
      </div>
      <div className='passlength'>
        <label>Include Lowercase Letters</label>
        <input type='checkbox' checked={lowercase} onChange={() => setlowercase(!lowercase)} />
      </div>
      <div className='passlength'>
        <label>Include Numbers</label>
        <input type='checkbox' checked={number} onChange={() => setnumber(!number)} />
      </div>
      <div className='passlength'>
        <label>Include Symbols</label>
        <input type='checkbox' checked={special} onChange={() => setspecial(!special)} />
      </div>
      <button className='btn' onClick={createpassword}>Generate Password</button>
    </div>
    
  );
}

export default App;

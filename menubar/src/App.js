import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { questions } from './data/faq';
import Faqs from './Faqs';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer,NotificationManager } from 'react-notifications';

function App() {
  let [state, setstate] = useState(false);
  let [statex, setstatex] = useState(false);
  let [stateans, setstateans] = useState(questions[0].id);

  let notifications=()=>{
    NotificationManager.success('Success message', 'Title here');
  };
  return (
    <div className='App'>
 
 <button onClick={notifications}>Save</button>

 <NotificationContainer></NotificationContainer>
 
 {/* <div>
<h1>Frequently Asked Questions</h1>

   <div className='freq'>

    {questions.map((faqitems,i)=>
    {
      return(
          <div className='freqitems'>
          <h2 onClick={()=>setstateans(faqitems.id)}>{faqitems.Questions}</h2>
          <p className={stateans==faqitems.id ? 'activeans' :''}>{faqitems.Answers}</p>
          </div>
      )
    }
     ) 
    }
    
 </div>
 </div> */}
    

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
      <Faqs></Faqs>
    </div>
  );
}

export default App;

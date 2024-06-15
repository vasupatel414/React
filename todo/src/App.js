import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer,NotificationManager } from 'react-notifications';
let notifications = () => {
  NotificationManager.warning('Already exists');
};
let notificationsx = () => {
  NotificationManager.success('Successfully saved');
};
function App() {
  let [todolist, settodolist] = useState([])
  let savetodolist = (event) => {

    let toname = event.target.toname.value;
    if (!todolist.includes(toname)) {
      let finaldolist = [...todolist, toname]
      settodolist(finaldolist)
      notificationsx()
    }
    else {
      notifications()
    }
    event.preventDefault();

  }
let list=todolist.map((value,index)=>{
  return(
    <Todolistitem value={value} key={index} indexnumber={index} todolist={todolist} settodolist={settodolist}>
    </Todolistitem>
  )
})
  return (
    
    <div className="App">
      <NotificationContainer></NotificationContainer>
      <h1>Todo list</h1>

      <form onSubmit={savetodolist}>

        <input type='text' name='toname' />
        <button> Save </button>

      </form>
      <div className='outerdiv'>
        <ul>
         {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function Todolistitem({value,indexnumber,todolist,settodolist}){
  let deleterow=()=>
    {
      let finaldata=todolist.filter((v,i)=>i!=indexnumber);
      settodolist(finaldata);
    }
  return(
    <li>{value}<span onClick={deleterow}>&times;</span></li>
  )
}
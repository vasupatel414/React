import { useState } from 'react';
import './App.css';
import {Col,Container,Form,Row,Table} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
//   let [uname,setuname]=useState('')
//   let [password, setpassword] = useState('') 
//   let subbbb=(event)=>{
// event.preventDefault()

// console.log(uname,password)
//   } 
let [formdata,setformdata]=useState(
  {
    uname:'',
    uemail:'',
    uphone:'',
    uMessage:'',
    index:''
  }
);
let getvalue=(event)=>{
let olddata={...formdata}
let inputname=event.target.name;
let inputvalue =event.target.value;
olddata[inputname]=inputvalue;
setformdata(olddata)
  
}
let [userdata,setuserdata]=useState([])

let handlesubmit=(event)=>{
event.preventDefault()

let currentformdata={
  uname:formdata.uname
  , uemail: formdata.uemail
  , uphone: formdata.uphone,
  uMessage: formdata.uMessage
}
if(formdata.index==="")
  {
  let check = userdata.filter((v) => v.uemail == formdata.uemail || v.uphone == formdata.uphone )
if(check.length==1)
  {
toast.error("already exist")
  }
else{
let olduserdata=[...userdata,currentformdata]
setuserdata(olduserdata)
  setformdata({
    uname: '',
    uemail: '',
    uphone: '',
    uMessage: '',
    index: ''
  }
  )
}
}
else {
let editindex=formdata.index
let olddata=userdata;
  let check = userdata.filter((v,i) => (v.uemail == formdata.uemail || v.uphone == formdata.uphone) && i!=editindex)
  if (check.length != 1) {
   
olddata[editindex]['uname']=formdata.uname
  olddata[editindex]['uemail'] = formdata.uemail
  olddata[editindex]['uphone'] = formdata.uphone
  olddata[editindex]['uMessage'] = formdata.uMessage
  setuserdata(olddata)
  setformdata({
    uname: '',
    uemail: '',
    uphone: '',
    uMessage: '',
    index: ''
  }
  )
}
else{
   
      toast.error("already exist")
    
}
}
}

let editrow=(indexnumber)=>{
  let editdata=userdata.filter((v,i)=>i==indexnumber)[0]
  editdata['index']=indexnumber
  setformdata(editdata)
  
}
let deleterow=(indexnumber)=>
  {
      let deletedata=userdata.filter((v,i)=>i!=indexnumber)
      setuserdata(deletedata);
  }
  return (
   <Container fluid>
      <ToastContainer />
      <Container>
  <Row>
    <Col classname='text-center py-5'>
      <h1>Enquiry Now</h1>
    </Col>
  </Row>
  <Col lg={5}>
    <form onSubmit={handlesubmit} >
      <div className='pb-3'>
        <label className='form-label'>Username</label>
              <input type='text' onChange={getvalue} name='uname' value={formdata.uname} className='form-control' />
      </div>
       <div className='pb-3'>
         <label className='form-label'>email</label>
              <input type='text' onChange={getvalue} name='uemail' value={formdata.uemail} className='form-control' />
      </div>
            <div className='pb-3'>
              <label className='form-label'>phone</label>
              <input type='text' onChange={getvalue} name='uphone' value={formdata.uphone}  className='form-control' />
            </div>
            <div className='mb-3'>
              <label for="" className='form-label'>Mesasge</label>
              <textarea name='uMessage' onChange={getvalue}  value={formdata.uMessage} className='form-control' rows="3" />
            </div>
            <button className='btn btn-primary'>{
              formdata.index!=="" ? 'update' :'save'
            }
</button>
    </form >
  </Col>
      </Container>
        <Col lg={7} >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nmae</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { userdata.length>=1 ?

              userdata.map((obj,i)=>{
                return(
              <tr >
                <td>{i+1}</td>
                <td>{obj.uname}</td>
                    <td>{obj.uemail}</td>
                    <td>{obj.uphone}</td>
                    <td>{obj.uMessage}</td>
                    <td><button onClick={() => editrow(i)}>Edit</button>
                      <button onClick={()=>deleterow(i)}>Delete</button></td>
                </tr> 
                ) 
              })
               
              
              :
              <tr>
                <td colSpan={6}>No Data Found</td>
              </tr>
}            
            </tbody>
          </Table>
        </Col>

   </Container>
  );
}

export default App;

//<div className="App">
    //   <div className='container'>
    //     <div className='row'>
    //       <div className='col-lg-6'>
    //         <form onSubmit={subbbb}>
    //           <div className='text-start my-3'>
    //             <label>Username</label>
    //             <input type='text' onChange={(event) => setuname(event.target.value)} className='form-control' value={uname} />
    //           </div>
    //           <div className='text-start my-3' onChange={(event) => setpassword(event.target.value)} value={password}>
    //             <label>Password</label>
    //             <input type='password' className='form-control' />
    //           </div>
    //           <div className='text-start my-3'>
             
    //            <button>login</button>
    //           </div>

    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

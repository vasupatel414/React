import logo from './logo.svg';
import './App.css';
import Categoryx from './Categoryx';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
let [final,setfinal]=useState([])
  let [finall, setfinall] = useState([])
let [catname,setcatname]=useState('')

  let getcategory=()=>
    {
    axios.get('https://dummyjson.com/products/category-list')
    .then((res)=>res.data)
    .then((finalres)=>{
      // console.log(finalres)
      setfinal(finalres)
    })
    }
  let getproducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((resx) => resx.data)
      .then((finalress) => {
        // console.log(finalress)
        setfinall(finalress.products)
      })
  }

    useEffect(()=>{
      getcategory();
     getproducts();
    },[])

    useEffect(()=>
    {
if(catname!=='')
  {
  axios.get(`https://dummyjson.com/products/category/${catname}`)
    .then((resx) => resx.data)
    .then((finalress) => {
      // console.log(finalress)
      // setfinall(finalress.products)
      console.log({catname})
    })
  }
    },[catname])
let pitems=finall.map((product,index)=>{
  return(
    <Productitems pdata={product}/>
  )
})

  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'> Our Products</h1> 
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>
            <div >
               <Categoryx final={final} setcatname={setcatname}/>
            </div>
            <div>
              <div className='grid grid-cols-3 gap-4'> 
                {pitems}
               
            </div>    
            </div>
          </div>
        </div >
      </div>
    </>
  );
}

export default App;

function Productitems({pdata})
{
  return(
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} className='w-[100%] h-[220px]'></img>
      <h4>{pdata.title}</h4>
      <b>{pdata.price}</b>
    </div>
  )
}
//https://dummyjson.com/products
//https://dummyjson.com/products/categories
//https://dummyjson.com/products/category/smartphones
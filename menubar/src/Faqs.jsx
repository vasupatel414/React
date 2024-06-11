import React, { useState } from 'react'
import { questions } from './data/faq'

export default function Faqs() {


    let [currentid, setcurrentid] = useState(questions[0].id);

    let itesm =questions.map((itemsdata,i)=>{

        let itemdetails={
            itemsdata,
            currentid,
            setcurrentid,
        }
        return(
            <FaqItems itemdetails={itemdetails}  key={i}/>
        )
    })
  return (
      <div>
          <h1>Frequently Asked Questions</h1>

          <div className='freq'>

            {itesm}

          </div>
      </div>
  )
}

function FaqItems({itemdetails})
{
    let {itemsdata,currentid,setcurrentid}=itemdetails;

    return(
        <div className='freqitems'>
            <h2 onClick={() => setcurrentid(itemsdata.id)}>{itemdetails.itemsdata.Questions}</h2>
            <p className={currentid == itemsdata.id ? 'activeans' : ''}>{itemdetails.itemsdata.Answers}</p>
        </div>
    )
}

// onClick = {() => setstateans(faqitems.id)}
// { faqitems.Questions }

// { faqitems.Answers }
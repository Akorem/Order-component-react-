import React, { useState } from 'react'
import img from './images/illustration-hero.svg'
import img1 from './images/icon-music.svg'
import './classwork.css'

const Classwork = () => {
    // let [texts, setText] = useState('');

  
    // function ageChanger(){
    //     if(texts === <s></s> ) {
    //         setAge(150)
    //     }else{
    //         setAge(100)
    //     }
    // }

    let one = "Annual Plan"
    let [text, setText] = useState('Annual Plan')
    let [price, setPrice] = useState('$59.99/year')


    function txtchange() {



     if(text === 'Annual Plan'){
         console.log(text);
        setText('Monthly Plan')
        setPrice('$4.99/month')
     }

    //  if(text == "Monthly Plan"){
    //     console.log(text);

    //              setText('Annual Plan')
    //      setPrice('$59.99/year')
    //  }
     
     else{
         setText('Annual Plan')
         setPrice('$59.99/year')
     }

    }
  return (
    <div className='Maindv'>
        <article className="card">
      <div className="card__img-holder">
        <img src={img}/>
      </div>
      <div className="card__body">
        <h1 className="title">Order Summary</h1>
        <p className="text">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you
          like!</p>
        <div className="plan-box">
          <div className="plan-box-left">
            <img src={img1}/>
            <div className="plan-details">
              <h2>{text}</h2>
              <p>{price}</p>
            </div>
          </div>
          <div className="plan-box-right">
            <a onClick={txtchange}>Change</a>
          </div>
        </div>
      </div>
      <div className="button-holder">
        <button className="btn payment-btn">Proceed to Payment</button>
        <button className="btn cancel-btn">Cancel Order</button>
      </div>
    </article>
       

       
    </div>
  )
}

export default Classwork
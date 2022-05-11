import React from 'react'
import { useState } from 'react';

const Example = () => {

  // let [text, setText] = useState('Random Title');
  // let [age, setAge] = useState(100);
  // let [person, setPerson] = useState({
  //   name: 'Akin',
  //   age: 21,
  //   message: 'web developer' 
  // })


  // function agechanger(){
  //   if(age === 100){
  //     setAge(150)
  //   }else{
  //     setAge(100)
  //   }
  // }
  // function hold() {
  //   if(text === 'Random Title'){
  //     setText('Random city')
  //   }else{
  //     setText('Random Title')
  //   }
   
  // }

  // function changeAll(){
  //   setPerson({...person, name: 'ross'})
  // }
  
  return (
    <div className='example'>
        <h2>useState Basics</h2>
        <h2>{text}</h2>
        <button onClick={hold}>click to change title</button>
        <div>
          <h2>{age}</h2>
          <button onClick={agechanger}>click to change age</button>
        </div>
        <h2>{person.name}</h2>
        <h2>{person['age']}</h2>
        <h1>{person.message}</h1>
        <button onClick={changeAll} >click to change person</button>
    </div>
  )
}

export default Example
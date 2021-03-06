import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import fs from "./assets/fs.png";

const ReactMemo = () => {
    const [count, setCount] = useState(0);
    const [img, setImg] = useState(null)

    const increase = () =>{
        setCount (count +1);
    }
    
    
  return (
    <div>
        <Header img={img}/>
        <p>Count : {count} </p>
        <button onClick={increase}>Increase</button>
        <button onClick={()=> setImg(fs)}>FS</button>
    </div>
  )
}

export default ReactMemo;
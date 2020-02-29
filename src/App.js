import React, { useState, useEffect } from 'react';
import './App.css';
import  api from    './services/api';
import HashLoader from "react-spinners/HashLoader";


import chuck from "./assets/chuck.png"
export default function App() {
  const   [sentence, setSentence]   =   useState("");
  const   [loading, setLoading]   =   useState(false);

  useEffect(()=>{
    loadSentence()
  },[])

  async function loadSentence(){
    setLoading(true)
    const response  = await api.get("https://api.chucknorris.io/jokes/random")
    setLoading(false)
    setSentence(response.data.value)
  }
  
  return (
  <div>
    <div className="img">
      <img src={chuck} alt="chuk-norris"/>
    </div>
    <div className="button">
      <button onClick={loadSentence}>Click to generate a chuck norris joke</button>
      <p>{sentence}</p>
      <HashLoader
          css={{marginLeft: 'auto', marginRight: 'auto'}}
          size={125}
          //size={"150px"} this also works
          color={"#123abc"}
          loading={loading}
        />
    </div>
    </div>
   
  );
}

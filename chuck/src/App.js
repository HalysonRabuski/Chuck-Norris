import React, { useState, useEffect } from 'react';
import './App.css';
import  api from    './services/api';

import chuck from "./assets/chuck.png"
export default function App() {
  const   [sentence, setSentence]   =   useState("");

  async function loadSentence(){
    const response  = await api.get("https://api.chucknorris.io/jokes/random")
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
    </div>
    </div>
   
  );
}

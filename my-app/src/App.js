import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


//using object as an array 
var emojiData ={
  "😀" : "smilling",
  "😞" : "sad",
  "😰" : "cold",
  "🤣" : "lol",
  "🤑" : "greddy",
  
}
//for showing emoji
var emojiWeKnow=Object.keys(emojiData);
function App() {
  // using use state 
  //usestate :- meaning is a curret value and setmeaning is used for updating the new value
  var [meaning,setmeaning]=useState("")
  
   function ontapHandler(event){
      //targeting the writen value 
     var userInput =event.target.value;
    var meaning =emojiData[userInput]
   setmeaning(meaning);
   }
   function emojiClick(emoji){
     var meaning=emojiData[emoji]
     setmeaning(meaning);
   }
  return (
    <div className="App">
      <h1>Your mode</h1>
      <input onChange={ontapHandler}/>
     
      <h2>Select your mood</h2>
      {/* map is used as loop with */}
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
          onClick={()=>emojiClick(emoji)}
          style={
            {
              fontSize:"5rem",
              padding:"0.5rem",
              cursor:"pointer"
            }}
          >
            {emoji}
          </span>
        )
      })}
      <h2>your mood is : {meaning}</h2>
    </div>
  );
}

export default App;

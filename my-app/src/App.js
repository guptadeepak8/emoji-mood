import React, {useState} from 'react';
import emojidata from './emojidata';

var emojiWeKnow=Object.keys(emojidata);
function App() {
 
  const [meaning,setmeaning]=useState()
     function emojiClick(emoji){
      console.log(emoji);
     var meaning=emojidata[emoji]
      console.log(emojidata[emoji]);
     setmeaning(meaning);
   }
   
   const  emojiElements=emojiWeKnow.map(emoji=>{
  return (
        <span key={emoji}className="emojirender"onClick={()=>emojiClick(emoji)}> {emoji} </span>
        
      )
   }
  )


  return (
    <div className="App">
      <h1>Your mode</h1>
       <h2>Select your mood</h2>
       {emojiElements}
      <h2>your mood is : {meaning}</h2>
    </div>
  )
}

export default App;

import { useState,useMemo } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

//logic to generate random lines
const words=["hi","my","name","is","to","for","random"];
const Total_lines=1000;
const all_words=[];
for(let i=0;i<Total_lines;i++){
  let sentence="";
  for(let j=0;j<words.length;j++){
    sentence+=(words[Math.floor(words.length*Math.random())])
    sentence+=" ";
  }
  all_words.push(sentence);
}

function App() {
  const [sentences, setSentences] = useState(all_words);
  const [filter,setFilter]=useState("");

  const filteredSentences=useMemo(()=>{
    return sentences.filter(x=>x.includes(filter));
  },[sentences,filter]);

  return (
    <>
      <input onChange={(e)=>{setFilter(e.target.value)}}></input>
      {filteredSentences.map(word =><div>
        {word}
      </div>)}
    </>
  )
}

export default App

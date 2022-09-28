import React, {useState} from "react"

function App() {

  const [text, setText] = useState("")

  function handleChange(event) {
    setText(event.target.value)
  }

  function countWords(string) {
    return string.split(" ").length
  }
  
  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange}/>
      <h4>Time Remaining :</h4>
      <button onClick={(console.log(countWords(text)))}>Start</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;

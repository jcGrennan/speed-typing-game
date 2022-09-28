import React, {useState} from "react"

function App() {

  const [text, setText] = useState("")
  const [timeRemaining] = useState(30)

  function handleChange(event) {
    setText(event.target.value)
  }

  function countWords(string) {
    const wordsArr = string.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange}/>
      <h4>Time Remaining : {timeRemaining}</h4>
      <button onClick={() => console.log(countWords(text))}>Start</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
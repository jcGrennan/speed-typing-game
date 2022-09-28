import React, {useState, useEffect} from "react"

function App() {

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)

  function handleChange(event) {
    setText(event.target.value)
  }

  // function countWords(string) {
  //   const wordsArr = string.trim().split(" ")
  //   return wordsArr.filter(word => word !== "").length
  // }

  useEffect(() => {
    if(timeRemaining === 0) {
      setIsTimeRunning(false)
    }
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    }

  }, [isTimeRunning, timeRemaining])

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange}/>
      <h4>Time Remaining : {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Start</button>
      <h1>Word Count: </h1>
    </div>
  );
}

export default App;
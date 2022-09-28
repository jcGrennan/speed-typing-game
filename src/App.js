import React, {useState, useEffect} from "react"

function App() {

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleClick() {
    if(timeRemaining === 0) {
      setTimeRemaining(5)
      setIsTimeRunning(true)
    } else {
      setIsTimeRunning(true)
    }
  }

  function countWords(string) {
    const wordsArr = string.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }


  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else {
      setIsTimeRunning(false)
      setWordCount(countWords(text))
    }
  }, [isTimeRunning, timeRemaining])

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange}/>
      <h4>Time Remaining : {timeRemaining}</h4>
      <button onClick={handleClick}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
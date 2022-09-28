import React, {useState, useEffect} from "react"

function App() {

  const STARTING_TIME = 5
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(event) {
    setText(event.target.value)
  }

  function startGame() {
    setTimeRemaining(STARTING_TIME)
    setIsTimeRunning(true)
    setText("")
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(countWords(text))
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
      endGame()
    }
  }, [isTimeRunning, timeRemaining])

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={text} onChange={handleChange}/>
      <h4>Time Remaining : {timeRemaining}</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
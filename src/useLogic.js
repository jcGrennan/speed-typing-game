import {useState} from "react"

function useLogic() {
    const STARTING_TIME = 5
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textAreaRef = useRef(null)
  
    function handleChange(event) {
      setText(event.target.value)
    }
  
    function countWords(string) {
      const wordsArr = string.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
    }
  
    function startGame() {
      setTimeRemaining(STARTING_TIME)
      setIsTimeRunning(true)
      setText("")
      textAreaRef.current.disabled = false
      textAreaRef.current.focus()
    }
  
    function endGame() {
      setIsTimeRunning(false)
      setWordCount(countWords(text))
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
  
}

export default useLogic
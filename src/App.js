import useLogic from "./useLogic";

function App() {

    const [
        text, 
        timeRemaining, 
        isTimeRunning, 
        wordCount, 
        textAreaRef, 
        handleChange, 
        startGame
    ] = useLogic()

    return (
        <div>
            <h1>Can you type a word per second???</h1>

            <textarea 
                ref={textAreaRef} 
                disabled={!isTimeRunning} 
                value={text} 
                onChange={handleChange}
            />

            <h4>Time Remaining : {timeRemaining}</h4>

            <button 
                disabled={isTimeRunning} 
                onClick={startGame}
            >
                Start
            </button>

            <h1>Word Count: {wordCount}</h1>
        </div>
    );
}

export default App;
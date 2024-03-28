import React, { useState, useEffect } from "react";

const TypingTest = () => {
  const [inputText, setInputText] = useState("");
  const [timer, setTimer] = useState(0);
  const [started, setStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [testResult, setTestResult] = useState(null);
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor augue sed felis feugiat, nec sodales lorem aliquet.";

    
  const testDuration = 2; // 60 seconds

  let interval;

  useEffect(() => {
    if (started && timer < testDuration) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === testDuration) {
      // Test is over
      clearInterval(interval);
      calculateResult();
    }
  }, [started, timer]);

  const handleInputChange = (e) => {
    if (!typingStarted) {
      setTypingStarted(true);
      setStarted(true);
    }
    const { value } = e.target;
    setInputText(value);
    calculateWordCount(value);
    calculateMatchedLetters(value);
  };

  const calculateMatchedLetters = (input) => {
    const matchLetters = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) {
        matchLetters.push(input[i]);
      } else {
        break;
      }
    }
    setMatchedLetters(matchLetters);
  };

  const calculateWordCount = (input) => {
    const words = input.trim().split(/\s+/);
    setWordCount(words.filter((word) => word !== "").length);
  };

  const calculateResult = () => {
    const accuracy = (matchedLetters.length / text.length) * 100;
    const wordsPerMinute = (wordCount / (testDuration / 60)).toFixed(1);
    setTestResult({ accuracy, wordsPerMinute });
  };

  const resetTest = () => {
    setInputText("");
    setTimer(0);
    setStarted(false);
    setWordCount(0);
    setTypingStarted(false);
    setMatchedLetters([]);
    setTestResult(null);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-4 bg-gray-100 rounded-lg">
      <p className="text-lg font-semibold mb-4">{text}</p>
      <div className="relative mb-4">


        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`inline-block ${
              matchedLetters.length > index ? "text-green-500" : ""
            }`}
          >
            {letter}
          </span>
        ))}


      </div>
      <textarea
        className="w-full h-32 p-2 mb-4 border border-gray-300 rounded"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Start typing here..."
      ></textarea>
      <div className="flex justify-between items-center mb-4">
    <div className="">
     <p>Test Time: {testDuration}s</p>
        <p>Run Time: {timer}s</p>

    </div>
 

        <p>You types Words: {wordCount}</p>
      </div>
      {testResult ? (
        <div>
          <p>Accuracy: {testResult.accuracy.toFixed(2)}%</p>
          <p>Words per Minute: {testResult.wordsPerMinute}</p>

          <button
          className={`px-4 py-2 rounded text-white mt-4 ${
            started ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={started ? resetTest : () => setStarted(true)}
        >
          {started ? "Reset" : "Start"}
        </button>


        </div>
      ) : (
        <button
          className={`px-4 py-2 rounded text-white ${
            started ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={started ? resetTest : () => setStarted(true)}
        >
          {started ? "Reset" : "Start"}
        </button>
      )}
    </div>
  );
};

export default TypingTest;

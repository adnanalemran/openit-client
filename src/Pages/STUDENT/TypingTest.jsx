import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
const TypingTest = () => {
  const [inputText, setInputText] = useState("");
  const [timer, setTimer] = useState(0);
  const [started, setStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [typingStarted, setTypingStarted] = useState(false);
  const [matchedLetters, setMatchedLetters] = useState([]);
  const [testResult, setTestResult] = useState(null);
  const text =
    "A Quick Brown Fox Jumps Over the Lazy Dog. “Sphinx of black quartz, judge my vow”: Used by Adobe InDesign to display font samples. ”Jackdaws love my big sphinx of quartz”: Similarly, used by Windows XP for some fonts";

  const testDuration = 5 * 60; // 60 seconds

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
    <div className=" w-full mx-auto my-8 p-4 bg-gray-100 rounded-lg">
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
      <br />
      <br />

      <p className="p-4">Alternative test </p>
      <Link className="mt-4" to="https://monkeytype.com/">
        <button className="btn  btn-warning btn-sm">monkeytype</button>
      </Link>

      <Iframe
        url="https://10fastfingers.com/typing-test/bengali?fbclid=IwAR3A_TbeTqJK8f3GvIpDySLfeuy5_n3OhanffrucJY1sq_0qoDk6XajzLwg_aem_AU95qkVT3r4Fh_OlKHoIXpPsTLonFPmYIe8EczeDh-2H1VvhAMIHsuLGu3o4F8d8Us6T-w1g0PiBDnhlRfS_amJJ"
        width="640px"
        height="320px"
        id=""
        className="w-full h-[600px] my-8 rounded-sm"
        display="block"
        position="relative"
      />
    </div>
  );
};

export default TypingTest;

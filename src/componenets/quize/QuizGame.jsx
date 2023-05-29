import React, { useState, useEffect } from "react";
import "./QuizGame.css"

const QuizGame = () => {
  const [numbers, setNumbers] = useState([]);
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  const generateRandomNumbers = () => {
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      randomNumbers.push(randomNumber);
    }
    setNumbers(randomNumbers);
    setSortedNumbers([...randomNumbers].sort((a, b) => a - b));
    setInputs(Array(5).fill(""));
  };

  const handleDragStart = (event, number) => {
    event.dataTransfer.setData("text/plain", number);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const number = event.dataTransfer.getData("text/plain");
    const updatedInputs = [...inputs];
    updatedInputs[index] = number;
    setInputs(updatedInputs);
  };

  const handleInputChange = (event, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = event.target.value;
    setInputs(updatedInputs);
  };

  const checkAnswer = () => {
    setIsChecking(true);
    setIsCorrect(sortedNumbers.toString() === inputs.toString());
  };
  

  const resetGame = () => {
    setIsChecking(false);
    generateRandomNumbers();
  };

  

  return (
    <div className="quiz-container">
      <h1>Sorting the Numbers</h1>
      <div className="numbers-container">
        <div className="options">
          {numbers.map((number, index) => (
            <div
              key={index}
              className={`option${isChecking ? " disabled" : ""}`}
              draggable={!isChecking}
              onDragStart={(event) => handleDragStart(event, number)}
            >
              {number}
            </div>
          ))}
        </div>
        <div className="inputs">
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              disabled={isChecking}
              onChange={(event) => handleInputChange(event, index)}
              onDragOver={(event) => handleDragOver(event)}
              onDrop={(event) => handleDrop(event, index)}
            />
          ))}
        </div>
      </div>
      <button
        className="check-button"
        disabled={isChecking || inputs.includes("")}
        onClick={checkAnswer}
      >
        Check
      </button>
      {isChecking && (
        <div className={`result-message${isCorrect ? " correct" : " wrong"}`}>
          {isCorrect ? "Correct!" : "Wrong!"}
        </div>
      )}
      <button className="reset-button" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default QuizGame;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/scenario.css";

function ScenarioTow() {
  const quiz = {
    topic: "Ferozson Q/A",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          "Which of the following is a risk factor for the development of cirrhosis?",
        choices: [
          "Obesity",
          "Smoking",
          "High alcohol consumption",
          "Sedentary lifestyle",
        ],
        type: "MCQs",
        correctAnswer: "High alcohol consumption",
      },
      {
        question: "What is the most common cause of cirrhosis in the Pakistan?",
        choices: [
          "Hepatitis C",
          "Alcoholic liver disease",
          "Non-alcoholic fatty liver disease ",
          " Autoimmune hepatitis ",
        ],
        type: "MCQs",
        correctAnswer: "Hepatitis C",
      },
      {
        question:
          "What is the prognosis for patients with end-stage liver disease due to cirrhosis?",
        choices: [
          "50% chance of survival with a liver transplant",
          "Less than 10% chance of survival without a liver transplant",
          "70% chance of survival with medical management",
          "95% chance of survival with lifestyle modifications",
        ],
        type: "MCQs",
        correctAnswer:
          "Less than 10% chance of survival without a liver transplant",
      },
    ],
  };

  let message;
  const [state, setState] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [timer, setTimer] = useState(120);
  const [answerSelected, setAnswerSelected] = useState(false);

  console.log("result ", result.score);

  const myFunction = () => {
    setState({
      name: "Jhon",
      surname: "Doe",
    });
  };

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setAnswerSelected(false);


    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

//   const onAnswerSelected = (answer, index) => {
//     setSelectedAnswerIndex(index);
//     if (answer === correctAnswer) {
//       setSelectedAnswer(true);
//     } else {
//       setSelectedAnswer(false);
//     }
//     setAnswerSelected(true);
//   };

const onAnswerSelected = (answer, index) => {
    if (!answerSelected) {
      setSelectedAnswerIndex(index);
      if (answer === correctAnswer) {
        setSelectedAnswer(true);
      } else {
        setSelectedAnswer(false);
      }
      setAnswerSelected(true);
    }
  };

  if (result.score == questions.length) {
    message = "Congratulations! You are a winner.";
  } else {
    message = "Best of luck next time. We appreciate your time.";
  }

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          handleTimeUp();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleTimeUp = () => {
    setShowResult(true);
    setActiveQuestion(0);
  };

  useEffect(() => {
    return () => {
      if (quizStarted && timer === 0) {
        handleTimeUp();
      }
      setState({});
    };
  }, [timer, quizStarted]);

  const startQuiz = () => {
    setQuizStarted(true);
    startTimer();
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const navigate = useNavigate();

  return (
    <div className="quiz-container" style={{ background: "#e7e6e6" }}>
      {!quizStarted ? (
        <div>
            <span className="scenario">Case Scenario</span> 
          <p>
            Mrs Asia is a
            45-year-old woman who has been diagnosed with cirrhosis of the
            liver. She has been experiencing symptoms such as fatigue, yellowing
            of the skin and eyes, and fluid buildup in her abdomen. Mary's
            doctor has recommended that she undergo a liver transplant, but she
            is hesitant to do so.
          </p>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      ) : !showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
            <span className="active-question-no">
            &nbsp;&nbsp; Time Left: {Math.floor(timer / 60)}:{timer % 60}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
              >
                {selectedAnswerIndex === index && selectedAnswer === true && (
                  <span style={{color:"green", fontSize:"20px", fontWeight:"600"}}>
                      Correct Answer:&nbsp;
                  </span>
                )}

                {answer}

                {selectedAnswerIndex === index && selectedAnswer === false && (
                  <span style={{color:"green", fontSize:"20px", fontWeight:"600"}}>
                       &nbsp; Correct Answer: {correctAnswer}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null || !answerSelected}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <p>
            Total Score:<span> {result.score}</span>{" "}
          </p>
          <p>{message}</p>
          <button onClick={() => navigate("/")}> Cancel </button>{" "}
          <button onClick={() => navigate("/")}> Back To Home </button>
        </div>
      )}
    </div>
  );
}

export default ScenarioTow;

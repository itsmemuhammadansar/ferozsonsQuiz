import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/scenario.css";
import compaignLog from '../../asset/Photo/compaignLog.png';
import companyLogos from '../../asset/Photo/companyLogos.png';

function ScenarioTow() {
  const quiz = {
    topic: "Ferozson Q/A",
    level: "Beginner",
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          "What is the level of haemoglobin that needs to be maintained in this case?",
        choices: ["6-7 g/dl", "7-9 g/dl", "9-11 g/dl", "12-15 g/dl"],
        type: "MCQs",
        correctAnswer: "7-9 g/dl",
      },
      {
        question:
          "When should an upper GI endoscopy be performed in this case ?",
        choices: [
          "Within 1hour",
          "Within 8hours",
          "Within 12 hours",
          "Within 24 hours",
        ],
        type: "MCQs",
        correctAnswer: "Within 12 hours",
      },
      {
        question:
          "In which of the following conditions,should a preemptive Tips be done?",
        choices: [
          "Those with CPS A",
          "Those with CPS A and active bleed",
          "Those with CPS B",
          "Those with CPS B and active bleed",
        ],
        type: "MCQs",
        correctAnswer: "Those with CPS B and active bleed",
      },
      {
        question:
          "If Tips have been performed successfully what should be done next?",
        choices: [
          "Stop beta blockers",
          "Stop vasopressors",
          "Stop antibiotics",
          "Stop iv hydration",
        ],
        type: "MCQs",
        correctAnswer: "Stop vasopressors",
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
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
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
      setSelectedAnswerIndex(null);
      setSelectedAnswer(null);
      setAnswerSelected(false);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    if (!answerSelected) {
      setSelectedAnswerIndex(index);
      if (answer === correctAnswer) {
        setSelectedAnswer(true);
        
      } else {
        setSelectedAnswer(false);
        const correctAnswerIndex = choices.indexOf(correctAnswer);
        if (correctAnswerIndex !== -1) {
          setSelectedOptionIndex(correctAnswerIndex);
        }
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
    <div>
    <img className='Logo-image' style={{width:"540px"}} src={compaignLog} alt="compaign Logo" />
    <div className="quiz-container" style={{ background: "#e7e6e6",marginTop:"60px", margin:"60px auto 0 auto"}}>
      {!quizStarted ? (
        <div>
          <span className="scenario">Case Scenario</span>
          <p>
            A 35-year-old male presents to your opd with an episode of melana an
            hour ago. His vitals show bp 84/60mmHg, pulse 122bpm. Hb is 5.4g/dl,
            tlc 12k, platelets 25 x 109. You plan on transfusing blood to him.
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
                  className={`${
                    selectedAnswerIndex === index
                      ? selectedAnswer === true
                        ? "selected-answer"
                        : "incorrect-answer"
                      : ""
                  } ${
                    selectedAnswerIndex !== null &&
                    index !== selectedAnswerIndex &&
                    answer === correctAnswer
                      ? "correct-answer"
                      : ""
                  } ${answerSelected ? "disabled-option" : ""}`}
                  >
                    {selectedAnswerIndex === index && selectedAnswer === true ?
                      <span
                        style={{
                          color: "green",
                          fontSize: "20px",
                          fontWeight: "600",
                        }}
                      >
                      </span> : selectedAnswerIndex === index && selectedAnswer === false ?
                        <span
                          style={{
                            color: "red",
                            fontSize: "20px",
                            fontWeight: "600",
                          }}
                        >
                        </span> : null
                    }
    
                    {answer}
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
    <img style={{ maxWidth: "100%", height: "auto", marginTop:"150px" }} src={companyLogos} alt='companyLogos logo'/>
    </div>
  );
}
export default ScenarioTow;
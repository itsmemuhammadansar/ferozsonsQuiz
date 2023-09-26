
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../../src/scenario.css';

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
            choices: ["Obesity", "Smoking", "High alcohol consumption", "Sedentary lifestyle"],
            type: "MCQs",
            correctAnswer: "High alcohol consumption",
          },
          {
            question:
              "What is the most common cause of cirrhosis in the Pakistan?",
            choices: [" Hepatitis C ", "Alcoholic liver disease", "Non-alcoholic fatty liver disease ", " Autoimmune hepatitis "],
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
            correctAnswer: " Less than 10% chance of survival without a liver transplant",
          },
        ],
      };
    
      let message;
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
      console.log('result ',result.score);
    
      const { questions } = quiz;
      const { question, choices, correctAnswer } = questions[activeQuestion];
    
      const onClickNext = () => {
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
    
      const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index);
        if (answer === correctAnswer) {
          setSelectedAnswer(true);
        } else {
          setSelectedAnswer(false);
        }
      };
    
      const resetScore = () => {
        setResult({
          score: 0,
          correctAnswers: 0,
          wrongAnswers: 0,
        });
      };
    
      if (result.score == 5) {
        message = "Congulation! You are a winner.";
      } else {
        message = "Best of luck next time. We appreciate your time.";
      }
    
      const startQuiz = () => {
        setQuizStarted(true);
        resetScore();
      };
    
      const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
    
      const navigate=useNavigate();
    
      return (
        <div className="quiz-container">
          {!quizStarted ? (
            <div>
              <p><span className="scenario"> Scenario:  </span> Mrs Asia  is a 45-year-old woman who has been diagnosed with cirrhosis 
              of the liver. She has been experiencing symptoms such as fatigue, yellowing of the skin and eyes, 
              and fluid buildup in her abdomen. Mary's doctor has recommended that she undergo a liver transplant, 
              but she is hesitant to do so.
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
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex-right">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
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
              <button onClick={()=>navigate("/")}> Cancel </button> <button onClick={()=>navigate("/")}> Back To Home </button>
            </div>
          )}
        </div>
      );
};

export default ScenarioTow;
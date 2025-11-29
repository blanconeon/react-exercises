import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
const goBack = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
const goToNext = () => setQuestionIndex(nextQuestionIndex => nextQuestionIndex + 1);
  /* Use the callback function **when your new state depends on the previous state**.  
If your update does not depend on the previous value, you can use the variable directly(in this case questionIndex).  
But if you need the latest value (like counting up or down), always use the callback function to avoid bugs.*/
  // determine if on the first question or not 

  const onLastQuestion = questionIndex === questions.length - 1;
 const onFirstQuestion = questionIndex === 0; 
  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <p>{questions[questionIndex].prompt}</p>
    <div>
        <button disabled={onFirstQuestion} onClick={goBack}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

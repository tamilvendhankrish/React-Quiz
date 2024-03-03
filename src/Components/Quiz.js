import { useContext} from "react";
import Questions from "./Question";
import { QuizContext } from "../context/quiz";



const Quiz = () => {

    const [quizState,dispatch] = useContext(QuizContext);
   console.log("quizState*",quizState);


  //using reducer

 


    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                <div className="congratulations">Congratulations</div>
                <div className="results-info">
                    <div>You have completed the quiz.</div>
                    <div>You've got {quizState.correctAnswerCount} of 
                    {""} {quizState.questions.length}</div>
                </div>

                <div className="next-button" onClick = {()=> dispatch({type:"RESTART"})}>RESTART</div>

                </div>  

            )

            }
            {!quizState.showResults && quizState.questions.length >0 && (
            <div>
                <div className="score">Question {quizState.currentQuestionIndex + 1} / 8</div>
                <Questions />
                <div className="next-button" onClick = {()=> dispatch({type:"NEXT_QUESTION"})}>Next question</div>
            </div>   
            )
            }
        </div>
    );
}

export default Quiz;
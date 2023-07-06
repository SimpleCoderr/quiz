import { ResultButton } from "entities";
import { Result } from "entities/Result";
import { useAppDispatch, useTypedSelector } from "shared";
import { restartQuizAC, showResultAC } from "../model";
import { getCountRightAnswer } from "../lib/getCountRightAnswer";
import s from "./ResultBlock.module.scss";

export const ResultBlock = () => {
  const { resultsIsShow, answers, questions } = useTypedSelector(
    (state) => state.quiz
  );

  const dispatch = useAppDispatch();

  const showResult = () => {
    dispatch(showResultAC());
  };
  const restartQuiz = () => {
    dispatch(restartQuizAC());
  };

  const correctAnswers = questions.map((question) => question.correct);
  return (
    <div className={s.resultBlock}>
      {resultsIsShow ? (
        <Result
          countRightAnswer={getCountRightAnswer(correctAnswers, answers)}
          totalCountAnswer={questions.length}
          restartQuiz={restartQuiz}
        />
      ) : (
        <ResultButton onClick={showResult} />
      )}
    </div>
  );
};

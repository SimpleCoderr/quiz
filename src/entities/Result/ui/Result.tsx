import { useMemo } from "react";
import { getResultComment } from "../lib/getResultComment";
import { MyButton } from "shared";
import s from "./Result.module.scss";

type ResultProps = {
  countRightAnswer: number;
  totalCountAnswer: number;
  restartQuiz: () => void;
};
export const Result = ({
  countRightAnswer,
  totalCountAnswer,
  restartQuiz,
}: ResultProps) => {
  
  const resultComment = useMemo(
    () => getResultComment(countRightAnswer, totalCountAnswer),
    [countRightAnswer, totalCountAnswer]
  );

  return (
    <div className={s.resultBlock}>
      <div>
        Ваш резульат:{" "}
        <span className={s.resultInfo}>
          {countRightAnswer}/{totalCountAnswer}
        </span>
      </div>
      <div className={s.resultComment}>{resultComment}</div>
      <MyButton style={{fontSize: '28px'}} type="link" onClick={restartQuiz}>
        Пройти тест еще раз
      </MyButton>
    </div>
  );
};

import { useTypedSelector } from "shared";
import s from "./Quiz.module.scss";
import { QuestionList } from "features/QuestionList";
import { PaginationBlock } from "features/PaginationBlock";
import { useEffect } from "react";

export const Quiz = () => {
  
  return (
    <div>
      <QuestionList/>
      <PaginationBlock/>
    </div>
  );
};

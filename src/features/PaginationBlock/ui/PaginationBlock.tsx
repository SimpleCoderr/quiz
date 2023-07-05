import { PaginationButton } from "entities";
import { isDisableNextButton } from "../lib/isDisableNextBtn";
import s from "./PaginationBlock.module.scss";
import { useAppDispatch, useTypedSelector } from "shared";
import { derceasePageAC, increasePageAC } from "../model";

export const PaginationBlock = () => {
  const { page, pageQuantity, questions } = useTypedSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  // здесь можно вытащить номер страницы и сколько вопросов на странице из redux
  // на обработчики кнопок просто надо будет повешать dispatch(nextPage())...

  const decreasePage = () => {
    dispatch(derceasePageAC());
  };
  const increasePage = () => {
    dispatch(increasePageAC());
  };

  return (
    <div className={s.paginationBlock}>
      <PaginationButton onClick={decreasePage} disabled={page === 1}>
        назад
      </PaginationButton>
      <PaginationButton
        onClick={increasePage}
        disabled={isDisableNextButton(page, pageQuantity, questions.length)}
      >
        вперед
      </PaginationButton>
    </div>
  );
};

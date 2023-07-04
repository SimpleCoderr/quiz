import { PaginationButton } from "entities";
import { isDisableNextButton } from "../lib/isDisableNextBtn";
import s from "./PaginationBlock.module.scss"

type PaginationBlockProps = {
  questionsCount: number;
};

export const PaginationBlock = ({ questionsCount }: PaginationBlockProps) => {
  let page = 1;
  const pageQuantity = 5;
  // здесь можно вытащить номер страницы и сколько вопросов на странице из redux
  // на обработчики кнопок просто надо будет повешать dispatch(nextPage())...

  const handleClickBack = () => {};
  const handleClickForward = () => {};
  return (
    <div className={s.paginationBlock}>
      <PaginationButton onClick={handleClickBack} disabled={page === 1}>
        назад
      </PaginationButton>
      <PaginationButton
        onClick={handleClickForward}
        disabled={isDisableNextButton(page, pageQuantity, questionsCount)}
      >
        вперед
      </PaginationButton>
    </div>
  );
};

import { CHANGE_VARIANT } from "entities/QuestionBlock";
import { PAGE_BACK, PAGE_FORWARD } from "features/PaginationBlock";
import { questionBlock } from "shared";

type QuizState = {
  questions: questionBlock[];
  page: number;
  pageQuantity: number;
  answers: (number | undefined)[];
  resultsIsShow: boolean;
};

type ChangeVariantAction = {
  type: typeof CHANGE_VARIANT;
  payload: {
    questionIndex: number;
    variantIndex: number;
  };
};
type increasePageAction = {
  type: typeof PAGE_FORWARD;
};

type decreasePageAction = {
  type: typeof PAGE_BACK;
};

type QuizAction = ChangeVariantAction | increasePageAction | decreasePageAction;

const initialState: QuizState = {
  questions: [
    {
      question: "Столица Бразилии:",
      variants: ["Бразилиа", "Антананариву", "Копенгаген", "Москва"],
      correct: 0,
    },
    {
      question: "Столица Испании:",
      variants: ["Вильнюс", "Гаага", "Мадрид", "Берлин"],
      correct: 2,
    },
    {
      question: "Столица Шведции:",
      variants: ["Копенгаген", "Пекин", "Джакарта", "Стокгольм"],
      correct: 3,
    },
    {
      question: "Столица Индии:",
      variants: ["Дели", "Москва", "Лондон", "Анкара"],
      correct: 0,
    },
    {
      question: "Столица Алжира:",
      variants: ["Буэнос-Айрес", "Алжир", "Бразилиа", "Кувейт"],
      correct: 1,
    },
    {
      question: "Столица Турции:",
      variants: ["Баку", "Анкара", "Гавана", "Аккра"],
      correct: 1,
    },
  ],
  page: 1,
  pageQuantity: 5,
  resultsIsShow: false,
  answers: [],
};

export const quizReducer = (
  state = initialState,
  action: QuizAction
): QuizState => {
  switch (action.type) {
    case CHANGE_VARIANT:
      return {
        ...state,
        answers: [
          ...state.answers.slice(0, action.payload.questionIndex),
          action.payload.variantIndex,
          ...state.answers.slice(action.payload.questionIndex + 1),
        ],
      };
    case PAGE_FORWARD:
      return { ...state, page: state.page + 1 };
    case PAGE_BACK:
      return { ...state, page: state.page - 1 };
    default:
      return { ...state, answers: new Array(state.questions.length) };
    // чтобы в дальнейшем отслеживать ответы на вопросы, нужно иметь массив, размер которого равен количеству вопросов
    // default выполнится лишь однажды - при первом проходе по редьюсеру, в момент инициализации state
  }
};
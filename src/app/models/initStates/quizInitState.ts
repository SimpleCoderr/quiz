import { questionBlock } from "shared";

type QuizState = {
    questions: questionBlock[];
    page: number;
    pageQuantity: number;
    answers: (number | undefined)[];
    resultsIsShow: boolean;
  };
  
export const quizInitialState: QuizState = {
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
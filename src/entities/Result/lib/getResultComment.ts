export const getResultComment = (rightCount: number, totalCount: number) => {
  const ratio = (rightCount / totalCount) * 100;
  if (ratio < 50) {
    return "К сожалению, ты набрал меньше 50% правильных ответов :(";
  } else if (ratio < 70) {
    return "Ты что-то знаешь, но далеко не все, пройди тест еще раз и получи результат лучше";
  } else if (ratio < 90) {
    return "Ты достаточно много знаешь, у тебя твердая 4!";
  }
  return "Нужно быть очень умным, чтобы так хорошо пройти тест!";
};

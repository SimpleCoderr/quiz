import { QuestionBlock } from "entities/QuestionBlock"
import { useTypedSelector } from "shared"
import { getRangeIndexCurrentQuestions } from "../lib/getRangeIndexCurrentQuestions"

export const QuestionList = () => {
    const {questions, answers, page, pageQuantity} = useTypedSelector(state => state.quiz)

    console.log(answers)

    const [startIndex, lastIndex] = getRangeIndexCurrentQuestions(page, pageQuantity, questions.length)

    const currentQuestions = questions.slice(startIndex, lastIndex)
  return (
    <div>
      {currentQuestions.map(({ question, variants }, index) =>  {
        const globalIndexList = startIndex + index // это индекс вопроса относительно всего списка
        return (
          <QuestionBlock
          key={question}
          index={globalIndexList}
          question={question}
          variants={variants}
          markedVariant={answers[globalIndexList]}
        />
        )
      }
        )}
    </div>
  )
}
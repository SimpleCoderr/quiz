import { Quiz } from "widgets/Quiz";
import s from "./styles.module.scss";
import { ArrowDownOutlined } from "@ant-design/icons";

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <header className={s.headerPage}>
        <div>Пройдите тест на знание столиц мира и узнайте свой результат!</div>
        <ArrowDownOutlined />
      </header>
      <Quiz />
    </div>
  );
};

export default MainPage;

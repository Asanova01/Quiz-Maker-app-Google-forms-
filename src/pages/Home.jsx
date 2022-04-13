import React from "react";
import s from "./Home.module.css";
import image from "../image/menu.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className={s.header}>
        <h2>Google</h2>
        <img src={image} alt="" />
      </header>
      <p className={s.headline}>Создавайте информативные документы</p>
      <div className={s.block}>
        <p className={s.paragragh}>Для личных целей</p>
        <img
          src="https://www.google.com/images/about/docs-icon.svg"
          alt=""
          className={s.imageDoc}
        />
        <p className={s.text}>
          Благодаря Google Документам вы можете создавать файлы, редактировать
          их и работать над ними вместе с другими пользователями где и когда
          угодно - совершенно бесплатно.
        </p>
        <button onClick={() => navigate("forms")}>
          Открыть Google Документы
        </button>
      </div>
    </>
  );
};

export default Home;

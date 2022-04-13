import React from "react";
import { createGlobalStyle } from "styled-components";
import image from "../assets/image/menu.png";
import squareMenu from "../assets/image/squareMenu.png";
import search from "../assets/image/search.png";
import s from "./CreateForms.module.css";
import { useNavigate } from "react-router-dom";

const CreateForms = () => {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <header className={s.header}>
        <div className={s.headerBlock}>
          <img src={image} alt="" className={s.logo} />
          <img
            src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
            alt=""
          />
          <p>Формы</p>
        </div>
        <div className={s.input}>
          <img src={search} alt="" className={s.search} />
          <input type="text" placeholder="Поиск" />
        </div>
        <img src={squareMenu} alt="" className={s.logo} />
      </header>
      <p className={s.headline}>Создать форму</p>
      <div className={s.block}>
        <img
          src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
          alt=""
          className={s.plus}
          onClick={() => navigate("new-forms")}
        />
      </div>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: #ede7f6;
  }
`;

export default CreateForms;

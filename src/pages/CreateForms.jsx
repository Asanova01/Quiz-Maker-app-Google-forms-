import React from "react";
import { createGlobalStyle } from "styled-components";
import image from "../image/menu.png";
import squareMenu from "../image/squareMenu.png";
import search from "../image/search.png";
import s from "./CreateForms.module.css";

const CreateForms = () => {
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

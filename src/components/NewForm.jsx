import React from "react";
import { createGlobalStyle } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import s from "./NewForm.module.css";
const NewForm = () => {
  return (
    <>
      <GlobalStyle />
      <header className={s.header}>
        <img
          src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
          alt=""
        />
        <p>Новая форма</p>
        <BsEye />
        <button>Отправить</button>
      </header>

      <AiOutlineMenu />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: #ede7f6;
  }
  `;

export default NewForm;

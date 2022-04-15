import React from "react";
import styled from "styled-components";
import { BiFolder } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlinePalette } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiCornerUpLeft, FiCornerUpRight } from "react-icons/fi";
import Tabs from "./Tabs";

const QuizHeader = () => {
  return (
    <Header>
      <div className="form-header">
        <div className="form-header-left">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
            alt=""
          />
          <input type="text" placeholder="Новая форма" />
          <BiFolder fontSize="20px" color="#5f6368" />
          <AiOutlineStar fontSize="20px" color="#5f6368" />
          <span>Все изменения сохранены на Диске</span>
        </div>
        <div className="form-header-right">
          <MdOutlinePalette fontSize="20px" color="#5f6368" />
          <BsEye fontSize="20px" color="#5f6368" />
          <FiCornerUpLeft fontSize="20px" color="#5f6368" />
          <FiCornerUpRight fontSize="20px" color="#5f6368" />
          <button>Отправить</button>
          <BsThreeDotsVertical fontSize="20px" color="#5f6368" />
          <AiOutlineUser fontSize="20px" color="#5f6368" />
        </div>
      </div>
      <Tabs />
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0px 10px;
  button {
    background-color: #673ab7;
    width: 110px;
    height: 34px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .form-header {
    display: flex;
    justify-content: space-between;
  }
  .form-header-left {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 380px;

    input {
      border: none;
      outline: none;
      font-size: 15px;
      line-height: 24px;
      color: #2f2f31;
      width: 110px;
    }
    input:focus {
      border-bottom: 2px solid black;
    }
  }
  span {
    font-size: 10px;
    color: #444446;
  }
  .form-header-right {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
  }
`;
export default QuizHeader;

import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Tamplete = () => {
      const navigate = useNavigate();
  return (
    <Section>
      <div>
        <p>Создать форму</p>
        <img
          src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png"
          alt=""
          onClick={()=>navigate('new-forms')}
        />
      </div>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  p {
    text-align: center;
    font-size: 13px;
    color: #5f6368;
  }
  img {
    width: 300px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 10px;
  }
  img:hover {
    border: 2px solid #6e2594;
  }
`;

export default Tamplete;

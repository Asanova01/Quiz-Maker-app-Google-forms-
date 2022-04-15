import React, { useState } from "react";
import styled from "styled-components";

const Question = () => {
  const [questions, setQuestions] = useState([
    {
      questionText: "Вопрос",
      questionType: "radio",
      options: [
        { optionText: "Framework" },
        { optionText: "Library" },
        { optionText: "Lanquage" },
      ],
      open: true,
      required: false,
    },
  ]);
  const questionUI = () => {
    return questions.map((ques, i) => (
      <div key={i}>
        <Accordion>
          <div className={questions[i].open ? "add_border" : ""}>
            <div>
              {questions[i].open ? (
                <div className="saved-questions">
                  <h3>
                    {i + 1}. {questions[i].questionText}
                  </h3>

                  <div>
                    <div style={{ display: "flex" }}>
                      <label>
                        <input type={ques.questionType} disabled />
                        <div>{ques.options[i].optionText}</div>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="question-boxes">
                <div className="add-question">
<div className="add-question-top">
    <input type="text" className="question" placeholder="Вопросы" value={ques.questionText}/>
    
</div>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    ));
  };
  return (
    <Section>
      <div>
        <br />
        <div className="block">
          <div className="question-title-block">
            <div className="question-quiz-top">
              <input
                type="text"
                placeholder="Новая форма"
                className="question-quiz-top-name"
              />
              <input
                type="text"
                placeholder="Описание"
                className="question-quiz-top-desc"
              />
            </div>
          </div>
          {questionUI()}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.div`
  background-color: #f4f4f9;
  height: 100%;
  padding-bottom: 30px;
  .block {
    margin: auto;
    width: 50%;
  }
  .question-quiz-top {
    background-color: white;
    border-top: 8px solid rgb(107, 58, 183);
    border-radius: 8px;
    padding: 30px 25px;
    text-transform: capitalize;
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
  }
  .question-quiz-top-name {
    font-size: 28px;
    font-weight: 400;
    line-height: 40px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #f4f4f9;
    color: black;
    height: 35px;
  }
  .question-quiz-top-desc {
    font-size: 13px;
    font-weight: 400;
    line-height: 40px;
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid #f4f4f9;
    color: black;
    height: 20px;
  }
`;
const Accordion = styled.div`
  & h3 {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0.1px;
    line-height: 24px;
    padding-bottom: 8px;
  }
  & label {
    margin-left: 5px;
    margin-bottom: 5px;
  }
`;

export default Question;

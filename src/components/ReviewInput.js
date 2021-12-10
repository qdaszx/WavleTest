import React from "react";
import styled from "styled-components";

const ReviewInput = (props) => {
  const onChange = (e) => {
    props.onSaveTextData(e.target.value);
  };

  return (
    <>
      <div>
        <Textarea
          name=""
          id=""
          cols="30"
          rows="10"
          minLength={50}
          maxLength={300}
          placeholder={"내용을 입력하세요. \n30자~500자 등록 가능"}
          onChange={onChange}
        ></Textarea>
      </div>
    </>
  );
};

export const ViewInput = ({ children }) => {
  return (
    <>
      <Textarea readOnly view>
        {children}
      </Textarea>
    </>
  );
};

const Textarea = styled.textarea`
  div & {
    margin: 0 0 1rem 0;
  }
  border: ${(props) =>
    props.view ? `1px solid #ffffff` : `1px solid #BBBBBB`};
  background-color: ${(props) => props.theme.contentColor};
  font-size: 14px;
  line-height: 1.2rem;
  box-sizing: border-box;
  width: 34rem;
  max-height: 8rem;
  padding: 20px;
  resize: none;
  @media (max-width: 375px) {
    width: 100%;
  }
  @media (max-width: 768) {
    width: 23rem;
  }
`;

export default ReviewInput;

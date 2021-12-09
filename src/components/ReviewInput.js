import React from "react";
import styled from "styled-components";

const ReviewInput = (props) => {
  const onChange = (e) => {
    props.onSaveTextData(e.target.value);
  };

  return (
    <>
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
    </>
  );
};

const Textarea = styled.textarea`
  font-size: 14px;
  line-height: 1.2rem;
  box-sizing: border-box;
  width: 34rem;
  height: 8rem;
  padding: 20px;
  resize: none;
`;

export default ReviewInput;

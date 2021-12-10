import React from "react";
import styled from "styled-components";

const Button = ({ children, primary, upload, text, file }) => {
  const onClick = (e) => {
    if (!text) alert("내용을 입력해주세요");
    console.log(
      "내용: " + text,
      "파일 개수: " + file.length,
      "파일 원본 이름: [" + file + "]"
    );
    text = "";
    file = [];
  };
  if (primary && upload)
    return (
      <>
        <div>
          <BasicButton primary={primary} onClick={onClick}>
            {children}
          </BasicButton>
        </div>
      </>
    );

  return (
    <>
      <div>
        <BasicButton primary={primary}>{children}</BasicButton>
      </div>
    </>
  );
};

const BasicButton = styled.button`
  div & {
    margin: 0 0 0 1rem;
  }
  cursor: pointer;
  border: 0;
  font-size: 14px;
  border-radius: 5px;
  min-width: 100px;
  min-height: 30px;
  background-color: ${(props) =>
    props.primary ? props.theme.button1Color : props.theme.button2Color};
  color: ${(props) => props.theme.whiteColor};
`;

export default Button;

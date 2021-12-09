import React from "react";
import styled from "styled-components";

const Button = ({ children, primary, upload, text, file }) => {
  const onClick = (e) => {
    console.log(
      "내용: " + text,
      "파일 개수: " + file.length,
      "파일 원본 이름: [" + file + "]"
    );
  };
  if (primary && upload)
    return (
      <>
        <BasicButton primary={primary} onClick={onClick}>
          {children}
        </BasicButton>
      </>
    );

  return (
    <>
      <BasicButton primary={primary}>{children}</BasicButton>
    </>
  );
};

const BasicButton = styled.button`
  border: 0;
  font-size: 14px;
  border-radius: 5px;
  min-width: 100px;
  min-height: 30px;
  background-color: ${(props) => (props.primary ? "#8BAEEF" : "#F9A7A7")};
  color: #ffffff;
`;

export default Button;

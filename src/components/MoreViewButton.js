import React from "react";
import styled from "styled-components";

const MoreViewButton = (props) => {
  return (
    <>
      <Container>
        <Button>더 보기</Button>
      </Container>
    </>
  );
};

const Button = styled.button`
  cursor: pointer;
  margin: 1rem auto;
  display: block;
  border-radius: 10px;
  padding: 0.8rem 7.5rem;
  border: 1px solid #ffffff;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: ${(props) => props.theme.contentColor};
`;

const Container = styled.div`
  margin: 1rem auto;
`;

export default MoreViewButton;

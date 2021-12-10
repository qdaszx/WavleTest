import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Outter>
        <Inner>{children}</Inner>
      </Outter>
    </>
  );
};

const Outter = styled.div`
  padding: 1rem 1rem;
`;

const Inner = styled.div`
  margin: 0 auto;
  width: 1024px;
  @media (max-width: 1023px) {
    max-width: 700px;
  }

  @media (max-width: 767px) {
    max-width: 500px;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export default Layout;

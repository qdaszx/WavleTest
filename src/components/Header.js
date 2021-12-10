import styled from "styled-components";

const Header = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};

const Title = styled.h1`
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  margin: 0 0 3rem 0;
`;

export default Header;

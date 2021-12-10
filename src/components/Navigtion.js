import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <Container>
        <Tap>신청 내역</Tap>
        <Tap>찜한 모임</Tap>
        <Tap>포인트</Tap>
        <Tap>내 정보</Tap>
        <Tap select>후기 관리</Tap>
        <Tap>문의 내역</Tap>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  margin: 0 0 3rem 0;
`;

const Tap = styled.div`
  font-weight: ${(props) => (props.select ? "bold" : "")};
  cursor: pointer;
  width: 4rem;
  margin: 0 1.5rem 0 0;
  font-size: 14px;
  text-align: center;
  align-items: center;
`;

export default Nav;

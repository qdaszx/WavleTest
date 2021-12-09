import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Uploader from "./components/Uploader";
import ReviewInput from "./components/ReviewInput";
// 후기 review

const App = () => {
  const [files, setFiles] = useState([]);
  const [texts, setTexts] = useState("");

  const saveFileDataHandler = (enterFileData) => {
    setFiles([...files, enterFileData]);
  };

  const saveTextDataHandler = (enterTextData) => {
    setTexts(enterTextData);
    console.log(enterTextData);
  };

  return (
    <>
      <Inner>
        <Container>
          <Button>취소</Button>
          <Button primary upload text={texts} file={files}>
            등록하기
          </Button>
          <Button>후기 보기</Button>
          <Button primary>후기 수정</Button>
          <Uploader id={1} onSaveFileData={saveFileDataHandler}></Uploader>
          <Uploader id={2} onSaveFileData={saveFileDataHandler}></Uploader>
          <Uploader id={3} onSaveFileData={saveFileDataHandler}></Uploader>
          <ReviewInput onSaveTextData={saveTextDataHandler}></ReviewInput>
        </Container>
      </Inner>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: aqua;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export default App;

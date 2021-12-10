import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import Uploader from "./ImgUploader";
import ReviewInput, { ViewInput } from "./ReviewInput";

const Review = (props) => {
  console.log(props.user);
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
      <Container>
        <HeadLine>
          <Title>싱글 직장인 와인 파티</Title>
          <AgeScope>20대 후반 ~ 30대 초반</AgeScope>
        </HeadLine>
        <Body>
          <When>
            <div className="title">모집 일자</div>
            <div className="content">2월 10일 토요일 오후5시</div>
          </When>

          {props.user ? (
            <>
              <WrapContent>
                <ReviewInput onSaveTextData={saveTextDataHandler}></ReviewInput>
                <WrapUploader>
                  <Uploader
                    id={1}
                    onSaveFileData={saveFileDataHandler}
                  ></Uploader>
                  <Uploader
                    id={2}
                    onSaveFileData={saveFileDataHandler}
                  ></Uploader>
                  <Uploader
                    id={3}
                    onSaveFileData={saveFileDataHandler}
                  ></Uploader>
                </WrapUploader>
              </WrapContent>
              <WrapButton>
                <Button>취소</Button>
                <Button primary upload text={texts} file={files}>
                  등록하기
                </Button>
              </WrapButton>
            </>
          ) : (
            <>
              <WrapContent>
                <ViewInput>
                  {"후기를 작성해주세요. \n소정의 포인트가 지급됩니다."}
                </ViewInput>
                <WrapButton>
                  <Button>후기 보기</Button>
                  <Button primary>후기 수정</Button>
                </WrapButton>
              </WrapContent>
            </>
          )}
        </Body>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 2rem 2.5rem;
`;

const WrapContent = styled.div`
  padding: 0 0 0 3.5rem;
`;

const WrapButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const WrapUploader = styled.div`
  display: flex;
  margin: 0 0 1.5rem 0;

  div {
    margin: 0 1rem 0 0;
  }
`;

const When = styled.div`
  display: flex;

  div {
    font-weight: bold;
    margin: 0 0 2rem 0;
  }

  .title {
    margin: 0 1.5rem 0 0;
  }
`;

const Body = styled.div`
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 2.3rem 1.4rem;
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 0 0 10px 10px;
`;

const HeadLine = styled.div`
  border-radius: 10px 10px 0px 0px;
  display: flex;
  padding: 0.8rem 1.8rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.whiteColor};
`;

const Title = styled.div``;

const AgeScope = styled.div``;

export default Review;

import React from "react";
import styled from "styled-components";

const Uploader = (props) => {
  const onLoadFile = (e) => {
    const file = e.target.files;
    if (!file) return;
    props.onSaveFileData(file[0].name);
  };
  return (
    <>
      <div>
        <Label htmlFor={props.id}>
          사진 첨부
          <Input
            type="file"
            accept="image/*"
            id={props.id}
            onChange={onLoadFile}
          />
        </Label>
      </div>
    </>
  );
};

const Label = styled.label`
  box-sizing: border-box;
  display: block;
  color: ${(props) => props.theme.inputColor};
  background-color: ${(props) => props.theme.contentColor};
  text-align: center;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 2px dashed #bbbbbb;
  @media only screen and (max-width: "375px") {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    overflow: hidden;
  }
`;

const Input = styled.input`
  display: none;
`;

export default Uploader;

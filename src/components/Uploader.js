import React, { useState } from "react";
import styled from "styled-components";

const Uploader = (props) => {
  const onLoadFile = (e) => {
    const file = e.target.files;
    if (!file) return;
    props.onSaveFileData(file[0].name);
  };
  return (
    <>
      <Label htmlFor={props.id}>
        사진 첨부
        <Input
          type="file"
          accept="image/*"
          id={props.id}
          onChange={onLoadFile}
        />
      </Label>
    </>
  );
};

const Label = styled.label`
  box-sizing: border-box;
  display: block;
  color: #888888;
  background-color: #ffffff;
  text-align: center;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 2px dashed #bbbbbb;
`;

const Input = styled.input`
  display: none;
`;

export default Uploader;

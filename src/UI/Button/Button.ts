import styled from "styled-components";

export const ButtonDelete = styled.button`
  padding: 10px;
  border: 3px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 3px solid red;
    background-color: red;
    color: #fff;
    transition: 0.5s;
  }
`;

export const ButtonBase = styled.button`
  padding: 10px;
  border: 3px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    border: 3px solid green;
    background-color: green;
    color: #fff;
    transition: 0.5s;
  }
`;

export const ButtonMainCard = styled.button`
  padding: 10px;
  border: 3px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  width:100%;

  &:hover {
    border: 3px solid #000;
    background-color: #000;
    color: #fff;
    transition: 0.5s;
  }
`
import styled from "styled-components";

export const ContentPopUp = styled.div`
  z-index: 9999999;
  background-color: red;
  width: 350px;
  height: 95px;
  margin-top: 62px;
  text-align: center;
  position: fixed;
  border-radius: 25px;
`;

export const Mensagem = styled.div`
  display: flex;
  justify-content: center;
  height: 95px;
  align-items: center;
  font-weight: bold;
  span {
    color: white;
  }
`;

export const ContentX = styled.div`
  margin-top: 25px;
  margin-right: 15px;
  float: right;
  display: "flex";
  :hover {
    div {
      cursor: pointer;
    }
  }
`;

export const X1 = styled.div`
  width: 25px;
  height: 3px;
  border-radius: 20px;
  transform: rotate(45deg);
  position: absolute;
  background-color: white;
`;

export const X2 = styled.div`
  width: 25px;
  height: 3px;
  border-radius: 20px;
  transform: rotate(-45deg);
  background-color: white;
`;

import styled from "styled-components";

export const Content = styled.div`
  z-index: 1000;
  width: 100%;
  height: 95px;
  margin-top: 20px;
  position: fixed;
  display: flex;
  justify-content: center;
  @media (min-width: 1025px) {
    margin-left: -30px;
  }
`;
export const ContentPopUp = styled.div`
  background-color: ${({ cor }) => cor};
  box-shadow: 0px 4px 13px 0px black;
  width: 350px;
  text-align: center;
  position: fixed;
  border-radius: 25px;
  @media (min-width: 1025px) {
    margin-left: 60px;
  }
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

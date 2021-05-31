import styled from "styled-components";

export const Content = styled.div`
  z-index: 110;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentX = styled.div`
  float: right;
  display: "flex";
  :hover {
    div {
      cursor: pointer;
    }
  }
`;

export const X1 = styled.div`
  width: 35px;
  height: 7px;
  border-radius: 20px;
  transform: rotate(45deg);
  position: absolute;
  background-color: white;
`;

export const X2 = styled.div`
  width: 35px;
  height: 7px;
  border-radius: 20px;
  transform: rotate(-45deg);
  background-color: white;
`;

export const Modal = styled.div`
  box-shadow: 0px 0px 12px 0px black;
  width: 850px;
  height: 700px;
  background: linear-gradient(
    45deg,
    rgba(102, 7, 8, 1) 0%,
    rgba(164, 22, 26, 1) 30%,
    rgba(186, 24, 27, 1) 100%
  );
  border-radius: 20px;
  margin-top: 50px;
`;

export const ContentModal = styled.div`
  height: 100%;
  padding: 40px;
  color: white;
  /* display: flex; */
`;

export const ItemModal = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

export const InputLogin = styled.input`
  width: 295px;
  height: 40px;
  border-radius: 25px;
  padding: 5px;
  border: 0;
  outline: none;
  text-align: center;
`;

export const ButtonLogin = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 25px;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
  color: black;

  :hover {
    box-shadow: 0px 0px 15px 0px #10002b;
  }

  :active {
    box-shadow: 0px 0px 0px 0px #10002b;
    transition: transform 0.5s ease-in-out;
  }
`;

export const Item = styled.div`
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ContentLogo = styled.div`
  /* margin-left: 100px; */
  display: flex;
  justify-content: center;
`;

export const GridAgenda = styled.div`
  width: 670px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentItemGrid = styled.span`
  width: 100%;
  display: flex;
  margin-top: 2px;
`;

export const BodyGrid = styled.span`
  height: 250px;
  overflow-y: auto;
`;

export const ItemGridNome = styled.span`
  width: 190px;
  color: black;
  background-color: white;
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  :hover {
    cursor: default;
  }
`;

export const ItemGridHorario = styled.span`
  width: 250px;
  color: black;
  background-color: white;
  border-radius: 10px;
  transition: 300ms;
  text-align: center;
  border-radius: 0px;

  :hover {
    cursor: default;
  }
`;

export const ItemGridSituacao = styled.span`
  width: 110px;
  color: black;
  background-color: white;
  border-radius: 10px;
  transition: 300ms;
  text-align: center;
  border-radius: 0px;

  :hover {
    cursor: default;
  }
`;

export const ItemGridAcoes = styled.span`
  width: 200px;
  height: 25px;
  color: black;
  background-color: white;
  border-radius: 10px;
  transition: 300ms;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;

  :hover {
    cursor: default;
  }
`;

export const ButtonMenuAgenda = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
  transition: 500ms;
  color: black;

  :hover {
    cursor: default;
  }
`;

export const ButtonAceitar = styled.button`
  width: 60px;
  height: 20px;
  border-radius: 15px;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
  transition: 500ms;
  color: black;

  :hover {
    cursor: pointer;
    background-color: black;
    color: white;
    box-shadow: 0px 0px 3px 0px #10002b;
  }

  :active {
    background-color: #00000096;
    box-shadow: none;
  }
`;

export const ButtonRecusar = styled.button`
  width: 60px;
  height: 20px;
  border-radius: 15px;
  outline: none;
  border: 0;
  cursor: pointer;
  background-color: #ffffff;
  transition: transform 0.5s ease-in-out;
  transition: 500ms;
  color: black;

  :hover {
    cursor: pointer;
    background-color: red;
    color: white;
    box-shadow: 0px 0px 3px 0px #10002b;
  }

  :active {
    cursor: pointer;
    background-color: #ff000073;
    color: black;
    box-shadow: none;
  }
`;

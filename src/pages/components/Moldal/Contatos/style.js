import styled from 'styled-components/macro'

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
  width: 755px;
  height: 710px;
  background: linear-gradient(
    45deg,
    rgba(102, 7, 8, 1) 0%,
    rgba(164, 22, 26, 1) 30%,
    rgba(186, 24, 27, 1) 100%
  );
  border-radius: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 755px;
    height: 710px;
  }

  @media (max-width: 1024px) {
    width: 755px;
    height: 710px;
  }
`;

export const ContentModal = styled.div`
  height: 100%;
  padding: 40px;
  color: white;
  /* display: flex; */
`;

export const ContentItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-around;
  margin-top: 100px;
`;

export const ItemModal = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px;
  background: linear-gradient(
    49deg,
    rgba(211, 211, 211, 1) 0%,
    rgba(245, 243, 244, 1) 30%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 200px;
  width: 240px;
  border-radius: 25px;
  h1 {
    color: black;
  }
  :hover{
    box-shadow: 0px 0px 20px black;
  }
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


//----------------------------------

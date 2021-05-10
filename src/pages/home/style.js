import styled from "styled-components";

export const ContentHome = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
`;

export const ContentHeader = styled.div`
  background-color: white;
  height: 250px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBody = styled.div`
  box-shadow: 5px 5px 10px black;
  margin-top: -50px;
  background-color: RED;
  height: 850px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  z-index: 25;
`;

export const ContentFooter = styled.div`
  background-color: blue;
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

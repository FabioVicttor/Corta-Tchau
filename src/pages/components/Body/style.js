import styled from "styled-components";

export const ContentBody = styled.div`
  box-shadow: 5px 5px 10px black;
  margin-top: -50px;
  background-color: #161a1d;
  height: 850px;
  width: 80%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  border-radius: 50px;
  z-index: 25;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  display: flex;
  @media (min-width: 1025px) {
    margin-left: 80px;
  }
`;

export const ContentItem = styled.div`
  height: 200px;
  width: 150px;
  background-color: white;
  margin: 10px;
  border-radius: 25px;
`;

export const DetalhetItem = styled.div`
  text-align: center;
`;

export const ImgItem = styled.img`
  width: 150px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

import styled from "styled-components";

export const ContentBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBodyAgendar = styled.div`
  text-align: center;
  color: white;
  box-shadow: 5px 5px 10px black;
  margin-top: -50px;
  background-color: #161a1d;
  height: 200px;
  width: 80%;
  border-radius: 50px;
  z-index: 25;
  flex-direction: column;
  @media (min-width: 1025px) {
    margin-left: 80px;
  }
`;

export const ContentBodyCortes = styled.div`
  box-shadow: 5px 5px 10px black;
  margin-top: 50px;
  background-color: #161a1d;
  height: 1000px;
  width: 80%;
  border-radius: 50px;
  z-index: 25;
  flex-direction: column;
  @media (min-width: 1025px) {
    margin-left: 80px;
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  height: 80%;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  align-content: space-around;
`;

export const Title = styled.div`
  height: 100px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: white;
`;

export const ContentItem = styled.div`
  height: 200px;
  width: 200px;
  background-color: white;
  margin: 10px;
  border-radius: 25px;
`;

export const DetalhetItem = styled.div`
  text-align: center;
`;

export const ImgItem = styled.img`
  object-fit: cover;
  height: 170px;
  width: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  filter: grayscale(1);
  transition: 300ms;

  :hover {
    filter: grayscale(0);
    transition: 300ms;
  }
`;

export const ButtonAgendar = styled.button`
  width: 200px;
  height: 35px;
  border: none;
  z-index: 10;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* transition: transform 0.5s ease-in-out; */

  svg {
    height: 45px;
    width: 30px;
    fill: black;
    margin-right: 5px;
  }

  :hover {
    width: 205px;
    height: 40px;
    box-shadow: 0px 4px 10px 0px black;
    color: white;
    background: linear-gradient(
      90deg,
      rgba(102, 7, 8, 1) 0%,
      rgba(164, 22, 26, 1) 15%,
      rgba(186, 24, 27, 1) 100%
    );
    transition: transform 0.5s ease-in-out;

    svg {
      fill: white;
      height: 55px;
      width: 35px;
      transition-duration: 500ms;
    }
  }

  :active {
    svg {
      cursor: pointer;
      height: 45px;
      width: 30px;
    }
    width: 200px;
    height: 35px;
    box-shadow: 0px 0px 0px 0px black;
    transition: transform 0.5s ease-in-out;
  }

  h2 {
    @media (min-width: 1024px) {
      display: block;
    }
  }
`;

export const ContentButtonAgendar = styled.div`
  height: 70px;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

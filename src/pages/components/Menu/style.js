import styled from "styled-components";

export const LeftMenu = styled.div`
  z-index: 100;
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
  width: 380px;
  height: 100%;
  background-color: #f5f3f4;
  align-items: center;
  position: fixed;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ open }) =>
    open ? "1px 1px 20px 0px black" : "0px 0px 0px 0px black"};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-75%)")};

  @media (max-width: 1024px) {
    width: 300px;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  }
`;

export const Titulo = styled.h1`
  margin-top: 5%;
  margin-top: 10%;
  margin-left: 80px;
`;

export const ContentLogo = styled.div`
  justify-content: center;
  margin-top: 30px;
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${({ open }) => (open ? "380px" : "70px")};
  height: ${({ open }) => (open ? "245px" : "200px")};
  margin-left: ${({ open }) => (open ? "0px" : "300px")};

  @media (max-width: 1024px) {
    width: ${({ open }) => (open ? "300px" : "170px")};
    margin-left: ${({ open }) => (open ? "0px" : "300px")};
  }
`;

export const ListaMenu = styled.div`
  margin-top: ${({ open }) => (open ? "10px" : "0px")};
`;

export const ItemMenu = styled.button`
  height: 65px;
  width: 100%;
  border: none;
  z-index: 10;
  cursor: pointer;
  display: inline-flex;;
  align-items: center;
  padding: 5px;
  justify-content: center;
  transition: transform 0.5s ease-in-out;
  @media (min-width: 1024px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(37%)")};
  }

  svg {
    height: 45px;
    width: 30px;
    fill: black;
    margin-right:  ${({ open }) => (open ? "5px" : "0px")};
  }

  :hover {
    box-shadow: 0px 4px 10px 0px black;
    /* box-shadow: 0px 0px 7px 0px black; */
    color: white;
    background:linear-gradient(90deg, rgba(102,7,8,1) 0%, rgba(164,22,26,1) 15%, rgba(186,24,27,1) 100%);;
    transition: transform 0.5s ease-in-out;

    svg {
      fill: white;
      height: 65px;
      width: 45px;
      transition-duration: 500ms;
    }
  }

  :active {
    svg {
      cursor: pointer;
      height: 50px;
      width: 35px;
    }
    box-shadow: 0px 0px 0px 0px black;
    transition: transform 0.5s ease-in-out;
  }

  h2 {
    @media (min-width: 1024px) {
      display: ${({ open }) => (open ? "block" : "none")};
    }
  }
`;

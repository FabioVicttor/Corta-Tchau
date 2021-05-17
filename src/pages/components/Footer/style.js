import styled from "styled-components";

export const ContentFooter = styled.div`
  background-color: #0b090a;
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 20;
  color: white;
  margin-top: 50px;
`;

export const ContentLogo = styled.div`
  justify-content: center;
  margin-top: -30px;
  display: flex;
  width: 150px;
  height: 150px;
`;

export const ContentRede = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  :hover {
    svg {
      cursor: pointer;
      fill: red;
      width: 30px;
      height: 30px;
      transition-duration: 500ms;
    }
  }
  :active {
    svg {
      cursor: pointer;
      /* fill: white; */
      width: 24px;
      height: 24px;
      transition-duration: 500ms;
    }
  }
`;

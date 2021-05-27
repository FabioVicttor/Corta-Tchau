import styled from "styled-components";

export const ContentHeader = styled.div`
  background-color: white;
  height: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;
export const ContentLogo = styled.div`
  display: flex;
  margin-top: -45px;
  svg {
    height: 340px;
    width: 340px;
  }
  @media (min-width: 1025px) {
    margin-left: 80px;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: white;
`;

export const HeaderListra = styled.div`
  height: 100%;
  width: 45px;
  margin-right: 15px;
  transform: skew(336deg, 0deg);
`;

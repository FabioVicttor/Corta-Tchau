import styled from "styled-components";

export const SVG = styled.svg`
  width: ${({ open }) => (open ? "340px" : "170px")};
  height: ${({ open }) => (open ? "240px" : "120px")};

  @media (max-width: 1024px) {
    width: ${({ open }) => (open ? "300px" : "170px")};
  }
`;

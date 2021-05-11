import styled from "styled-components";

// export const SVG = styled.svg`
//   /* width: ${({ open }) => (open ? "340px" : "340px")}; */
//   height: ${({ open }) => (open ? "240px" : "170px")};

//   @media (max-width: 1024px) {
//     width: ${({ open }) => (open ? "340px" : "170px")};
//   }
// `;

export const SVG = styled.svg`
  /* width: ${({ open }) => (open ? "340px" : "340px")}; */
  height: ${({ open }) => (open ? "140px" : "120px")};

  @media (max-width: 1024px) {
    width: ${({ open }) => (open ? "140px" : "120px")};
  }
`;

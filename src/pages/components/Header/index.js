import React from "react";
import { ContentHeader, HeaderTitle, HeaderListra } from "./style";
// import Logo4 from "../../assets/icons/Logo/Logo4";

export default function Header() {
  return (
    <ContentHeader>
      <HeaderListra style={{ backgroundColor: "red" }} />
      <HeaderListra style={{ backgroundColor: "blue" }} />
      {/* <HeaderTitle>
        <div>Cabelin na Regua</div>
        <div>Bigodin Finin</div>
      </HeaderTitle> */}
    </ContentHeader>
  );
}

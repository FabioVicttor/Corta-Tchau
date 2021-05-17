import React from "react";
import { ContentHeader, ContentLogo } from "./style";
import Logo from "../../assets/icons/Logo/Logo";
// import img1 from "../../assets/image/img1.jpg";
// import img2 from "../../assets/image/img2.jpg";
// import img3 from "../../assets/image/img3.jpg";
// import img4 from "../../assets/image/img4.png";
// import img5 from "../../assets/image/img5.jpg";
// import img6 from "../../assets/image/img6.jpg";
// import img7 from "../../assets/image/img7.jpg";

export default function Header() {
  return (
    <ContentHeader>
      <ContentLogo>
        <Logo />
      </ContentLogo>

      {/* <img src={img7} width="1100" height="400" /> */}
      {/* <HeaderListra style={{ backgroundColor: "red" }} />
      <HeaderListra style={{ backgroundColor: "blue" }} /> */}
      {/* <HeaderTitle>
        <div>Cabelin na Regua</div>
        <div>Bigodin Finin</div>
      </HeaderTitle> */}
    </ContentHeader>
  );
}

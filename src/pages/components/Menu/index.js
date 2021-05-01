import React from "react";
import { LeftMenu, ListaMenu, ItemMenu, ContentLogo } from "./style";
import Logo from "../../assets/icons/Logo";

export default function Menu({ open, setOpen }) {
  return (
    <LeftMenu open={open}>
      <ContentLogo>
        {/* <Titulo>Corta e Tchau</Titulo> */}
        <Logo />
      </ContentLogo>
      <ListaMenu open={open}>
        <ItemMenu open={open}>
          <h2>Teste</h2>
        </ItemMenu>
        <ItemMenu open={open}>
          <h2>Teste</h2>
        </ItemMenu>
      </ListaMenu>
    </LeftMenu>
  );
}

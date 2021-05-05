import React from "react";
import { LeftMenu, ListaMenu, ItemMenu, ContentLogo } from "./style";
import Logo from "../../assets/icons/Logo/Logo";
import Login from "../../assets/icons/Login/Login";
import Agenda from "../../assets/icons/Agenda/Agenda";

export default function Menu({ open, setOpen }) {
  return (
    <LeftMenu open={open}>
      <ContentLogo open={open}>
        {/* <Titulo>Corta e Tchau</Titulo> */}
        <Logo open={open} />
      </ContentLogo>
      <ListaMenu open={open}>
        <ItemMenu open={open}>
          <Login />
          <h2>Login</h2>
        </ItemMenu>
        <ItemMenu open={open}>
          <Agenda />
          <h2>Agendamento</h2>
        </ItemMenu>
        <ItemMenu open={open}>
          <h2>Agenda - ADM</h2>
        </ItemMenu>
      </ListaMenu>
    </LeftMenu>
  );
}

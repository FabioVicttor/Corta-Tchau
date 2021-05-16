import React from "react";
import { LeftMenu, ListaMenu, ItemMenu, ContentLogo } from "./style";
import Logo from "../../assets/icons/Logo/Logo";
import Login from "../../assets/icons/Login/Login";
import Agenda from "../../assets/icons/Agenda/Agenda";
import Contatos from "../../assets/icons/Contatos/Contatos";

import { useDispatch } from "react-redux";
import { setShow, setShowContatos, setShowAgenda } from "../../../redux/actions";

export default function Menu({ open, setOpen }) {
  /*Controla Modal do Login*/
  const dispatch = useDispatch();
  function showModalLogin() {
    dispatch(setShow());
    setOpen(false);
  }
  /*Controla Modal do Login*/

  /*Controla Modal de Contatos*/
  function showModalContatos() {
    dispatch(setShowContatos());
    setOpen(false);
  }
  /*Controla Modal de Contatos*/

  /*Controla Modal de Agenda*/
  function showModalAgenda() {
    dispatch(setShowAgenda());
    setOpen(false);
  }
  /*Controla Modal de Agenda*/

  return (
    <LeftMenu open={open}>
      <ContentLogo open={open}>
        {/* <Titulo>Corta e Tchau</Titulo> */}
        <Logo open={open} />
      </ContentLogo>
      <ListaMenu open={open}>
        <ItemMenu open={open} onClick={showModalLogin}>
          <Login />
          <h2>Login</h2>
        </ItemMenu>
        <ItemMenu open={open} onClick={showModalAgenda}>
          <Agenda />
          <h2>Agendamento</h2>
        </ItemMenu>
        <ItemMenu open={open} onClick={showModalContatos}>
          <Contatos />
          <h2>Contatos</h2>
        </ItemMenu>
      </ListaMenu>
    </LeftMenu>
  );
}

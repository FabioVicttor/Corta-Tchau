import React from "react";
import { LeftMenu, ListaMenu, ItemMenu, ContentLogo } from "./style";
import Logo from "../../assets/icons/Logo/Logo";
import Login from "../../assets/icons/Login/Login";
import Agenda from "../../assets/icons/Agenda/Agenda";

import { useDispatch } from "react-redux";
import { setShow, setShowContatos } from "../../../redux/actions";

export default function Menu({ open, setOpen }) {
  
  /*Controla Modal do Login*/
  const dispatch = useDispatch();
  function showModalLogin() {
    dispatch(setShow());
  }
   /*Controla Modal do Login*/

  /*Controla Modal de Contatos*/
  function showModalContatos() {
    dispatch(setShowContatos());
  }
   /*Controla Modal de Contatos*/

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
        <ItemMenu open={open}>
          <Agenda />
          <h2>Agendamento</h2>
        </ItemMenu>
        <ItemMenu open={open} onClick={showModalContatos}>
          <h2>Contatos</h2>
        </ItemMenu>
      </ListaMenu>
    </LeftMenu>
  );
}

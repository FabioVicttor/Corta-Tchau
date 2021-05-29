import React from "react";
import { ContentHome } from "./style";
import Body from "../components/Body/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

import {
  ModalState,
  ModalStateContatos,
  ModalStateCadastro,
  ModalStateAgenda,
  ModalAgendaCorte,
} from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function Home({ open, setOpen }) {
  const showModal = useSelector(ModalState);
  const ModalContatos = useSelector(ModalStateContatos);
  const ModalCadastro = useSelector(ModalStateCadastro);
  const ModalAgenda = useSelector(ModalStateAgenda);
  const ModalCorte = useSelector(ModalAgendaCorte);

  return (
    <ContentHome
      style={{
        filter:
          showModal ||
          ModalContatos ||
          ModalCadastro ||
          ModalAgenda ||
          ModalCorte
            ? "blur(3px)"
            : "none",
      }}
    >
      <Header />
      <Body open={open} setOpen={setOpen} />
      <Footer />
    </ContentHome>
  );
}

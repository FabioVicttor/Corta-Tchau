import React from "react";
import {
  Content,
  ContentBody,
  Title,
  ContentBodyCortes,
  ContentBodyAgendar,
  ContentButtonAgendar,
  ContentItem,
  DetalhetItem,
  ImgItem,
  ButtonAgendar,
} from "./style";
import AnimatedDiv from "../Animated/AnimatedDiv";
import Agenda from "../../assets/icons/Agenda/Agenda";
import { useDispatch } from "react-redux";
import { setShowAgenda } from "../../../redux/actions";

export default function Body({ setOpen }) {
  /*Controla Modal de Agenda*/
  const dispatch = useDispatch();
  function showModalAgenda() {
    dispatch(setShowAgenda());
    setOpen(false);
  }
  /*Controla Modal de Agenda*/

  // function agendar(item) {
  //   showModalAgenda();
  //   setCorte(item);
  // }

  return (
    <ContentBody style={{ width: "100%" }}>
      <ContentBodyAgendar>
        <h1>Um tapa na Careca, um corte, um milagre!</h1>
        <span>
          Bigodin Finin, Cabelin na regua - <strong>AGENDE</strong> agora seu
          corte.
        </span>
        <ContentButtonAgendar>
          <ButtonAgendar onClick={showModalAgenda}>
            <Agenda />
            Agendamento
          </ButtonAgendar>
        </ContentButtonAgendar>
      </ContentBodyAgendar>
      <ContentBodyCortes>
        <Title>
          <h1>Cortes</h1>
        </Title>
        <Content>
          {Cortes.map((item) => (
            <AnimatedDiv key={item.id}>
              <ContentItem>
                <ImgItem src={item.foto} />
                <DetalhetItem>
                  <div>Nome: {item.item}</div>
                  <div>Tipo: {item.tipo}</div>
                </DetalhetItem>
              </ContentItem>
            </AnimatedDiv>
          ))}
        </Content>
      </ContentBodyCortes>
    </ContentBody>
  );
}

//OBJETO TESTE --- INICIO
const Cortes = [
  {
    id: 1,
    tipo: "Curto",
    item: "Corte 1",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 2,
    tipo: "Longo",
    item: "Corte 2",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 3,
    tipo: "Barba",
    item: "Corte 3",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 4,
    tipo: "Curto",
    item: "Corte 4",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 5,
    tipo: "Longo",
    item: "Corte 5",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 6,
    tipo: "Barba",
    item: "Corte 6",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 7,
    tipo: "Curto",
    item: "Corte 7",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 8,
    tipo: "Longo",
    item: "Corte 8",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 9,
    tipo: "Barba",
    item: "Corte 9",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 10,
    tipo: "Curto",
    item: "Corte 10",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 11,
    tipo: "Longo",
    item: "Corte 11",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
  {
    id: 12,
    tipo: "Barba",
    item: "Corte 12",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10,
  },
];
//OBJETO TESTE -- FINAL

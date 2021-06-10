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
import { useSelector, useDispatch } from "react-redux";
import { setShowAgenda, setShow } from "../../../redux/actions";
import { DadosUsuario } from "../../../redux/selectors";

export default function Body({ setOpen }) {
  /*Dados Usuario*/
  const usuario = useSelector(DadosUsuario);
  /*Dados Usuario*/

  /*Controla Modal de Agenda*/
  const dispatch = useDispatch();
  function showModalAgenda() {
    if (usuario.id !== null) {
      dispatch(setShowAgenda());
      setOpen(false);
    } else {
      dispatch(setShow());
    }
  }
  /*Controla Modal de Agenda*/

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
          <h2>DESTAQUES</h2>
        </Title>
        <Content>
          {Cortes.map((item) => (
            <AnimatedDiv key={item.id}>
              <ContentItem>
                <ImgItem src={item.foto}/>
                <DetalhetItem>
                  <div>{item.item}</div>
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
    tipo: "Barba",
    item: "CÊ-GOSTÔ",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847639865637732362/unknown.png",
    preco: 10.0,
  },
  {
    id: 2,
    tipo: "Longo",
    item: "PA QUEM ACHA",
    foto: "https://awebic.com/wp-content/uploads/2017/11/Awebic-Cortes-de-barba-e-cabelo-hil%C3%A1rios-16.jpg",
    preco: 10.05,
  },
  {
    id: 3,
    tipo: "Curto",
    item: "TOMA CHEUBI",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847635704137777152/EbZcR74WkAIRrMf.png",
    preco: 10.5,
  },
  {
    id: 4,
    tipo: "Barba",
    item: "BARBA DINHO",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847639265646870540/unknown.png",
    preco: 10.0,
  },
  {
    id: 5,
    tipo: "Longo",
    item: "ZEQUINHA",
    foto: "https://pbs.twimg.com/media/ED8gmpFXkAAxDUU.jpg",
    preco: 10.0,
  },
  {
    id: 6,
    tipo: "Curto",
    item: "G-CROME",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847637961918906398/unknown.png",
    preco: 10.0,
  },
  {
    id: 7,
    tipo: "Curto",
    item: "REGUA",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847635212267159592/negoney03-10388113.png",
    preco: 10.0,
  },
  {
    id: 8,
    tipo: "Longo",
    item: "BASSOURA",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847634856501313606/images.png",
    preco: 10.0,
  },
  {
    id: 9,
    tipo: "Barba",
    item: "RATÃO",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847636507820163102/unknown.png",
    preco: 10.0,
  },
  {
    id: 10.0,
    tipo: "Curto",
    item: "FENOMENO",
    foto: "https://cdn.discordapp.com/attachments/505795445562540052/847636342301130762/unknown.png",
    preco: 10.0,
  },
  {
    id: 11,
    tipo: "Longo",
    item: "BLIND",
    foto: "https://i.pinimg.com/564x/96/f5/c1/96f5c1db9cc2872145d63941a9c3ade2.jpg",
    preco: 10.0,
  },
  {
    id: 12,
    tipo: "Barba",
    item: "BASICO",
    foto: "https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2017/05/cortemilitar8.jpg",
    preco: 10.0,
  },
];
//OBJETO TESTE -- FINAL

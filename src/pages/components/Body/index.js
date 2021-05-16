import React from "react";
import { ContentBody, ContentItem, DetalhetItem, ImgItem } from "./style";
import AnimatedDiv from "../Animated/AnimatedDiv";

export default function Body() {
  function agendar(item) {
    console.log(item);
  }
  return (
    <ContentBody>
      {Cortes.map((item) => (
        <AnimatedDiv>
          <ContentItem key={item.id}>
            <ImgItem src={item.foto} />
            <DetalhetItem>
              <div>Nome: {item.item}</div>
              <div>Tipo: {item.tipo}</div>
              <div>R${item.preco}</div>
              {/* <button
                onClick={() => {
                  agendar(item.id);
                }}
              >
                Agendar
              </button> */}
            </DetalhetItem>
          </ContentItem>
        </AnimatedDiv>
      ))}
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

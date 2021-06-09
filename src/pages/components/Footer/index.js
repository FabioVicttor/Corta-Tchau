import React from "react";
import { ContentFooter, ContentLogo, ContentRede } from "./style";
import Logo from "../../assets/icons/Logo/Logo5";
import Facebook from "../../assets/icons/Redes/Facebook";
import Instagram from "../../assets/icons/Redes/Instagram";
import Linkedin from "../../assets/icons/Redes/Linkedin";
import Twitter from "../../assets/icons/Redes/Twitter";

export default function Footer() {
  return (
    <ContentFooter>
      <div style={{ width: "30%" }}>
        <div style={{ height: "50px" }}>
          <strong>Sobre nós</strong>
          <hr />
        </div>
        <ContentLogo>
          <Logo />
        </ContentLogo>
        <div style={{ fontSize: "11px" }}>
          Uma das barbarias mais procuradas de jundiaí e região, com mais de 30
          anos de atuação. Gerações de clientes/familias nos acompanham nessa
          trajetória. ​<br />
          OBS: Atendemos somente com horário marcado.
        </div>
      </div>
      <div style={{ width: "25%", marginLeft: "15px" }}>
        <div style={{ textAlign: "center", height: "50px" }}>
          <strong>Horários de Funcionamento</strong>
          <hr />
        </div>
        <div style={{ fontSize: "11px" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ width: "65px" }}>Segunda</p>
            <p style={{ width: "65px" }}>09:00 - 17:00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ width: "65px" }}>Terça</p>
            <p style={{ width: "65px" }}>09:00 - 17:00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ width: "65px" }}>Quarta</p>
            <p style={{ width: "65px" }}>09:00 - 17:00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ width: "65px" }}>Quinta</p>
            <p style={{ width: "65px" }}>09:00 - 17:00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ width: "65px" }}>Sexta</p>
            <p style={{ width: "65px" }}>09:00 - 17:00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ width: "65px" }}>Sabado</p>
            <p style={{ width: "65px" }}>09:00 - 17:00</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ width: "65px" }}>Domingo</p>
            <p style={{ width: "65px" }}>09:00 - 17:00</p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "15px" }}>
        <div style={{ textAlign: "center", height: "50px" }}></div>
        <div style={{ display: "grid" }}>
          <span>Corta & Tchau - Jundiai</span>
          <strong>Rua dos Bobos, 0 - Vraum</strong>
        </div>
        <div>
          <span>WhatsApp:</span> <strong>11 99999-9999</strong>
        </div>
        <div>
          <span>Celular:</span> <strong>11 99999-9999</strong>
        </div>
        <div>
          <span>Email: </span>
          <strong>
            <span>Corta&Tchau@naregua.com</span>
          </strong>
        </div>
        <div>
          <span>Siga nossas redes:</span>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ContentRede>
              <Facebook />
            </ContentRede>
            <ContentRede>
              <Instagram />
            </ContentRede>
            <ContentRede>
              <Linkedin />
            </ContentRede>
            <ContentRede>
              <Twitter />
            </ContentRede>
          </div>
        </div>
      </div>
    </ContentFooter>
  );
}

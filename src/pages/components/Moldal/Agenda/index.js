import React from "react";
import { ModalStateAgenda, DadosUsuario } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShowAgenda } from "../../../../redux/actions";
import {
  Content,
  Modal,
  ContentModal,
  ContentX,
  X1,
  X2,
  ContentLogo,
  ButtonMenuAgenda,
  GridAgenda,
  ContentItemGrid,
  ItemGridNome,
  ItemGridHorario
} from "./style";
import { motion } from "framer-motion";
import Logo2 from "../../../assets/icons/Logo/Logo2";

import { Agendar, getAgendamentos } from "../../../../services/Agenda/services";

export default function ModalAgenda() {
  const dispatch = useDispatch();
  const usuario = useSelector(DadosUsuario);
  const showModal = useSelector(ModalStateAgenda);
  const [agendamentos, setAgendamentos] = React.useState([]);

  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";

    let scheduling = getAgendamentos();

    scheduling.then((e) => {
      setAgendamentos(e.data.data);
    });
  }, [showModal]);

  function showModalAgenda() {
    dispatch(setShowAgenda());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date_time = event.target[0].value + " " + event.target[1].value;
    const description = event.target[2].value;
    const user_id = usuario.id;
    const token = usuario.token;

    let agendamento = Agendar(date_time, description, user_id, token);

    agendamento.then((e) => {
      if (e.data.success) {
        console.log("Agendado");
      } else {
        console.log("Error");
      }
    });
  };

  if (showModal) {
    return (
      <div>
        <Content>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Modal>
              <div>
                <ContentModal>
                  <ContentX onClick={showModalAgenda}>
                    <X1></X1>
                    <X2></X2>
                  </ContentX>
                  <ContentLogo>
                    <Logo2 />
                  </ContentLogo>
                  <div style={{ marginTop: "30px" }}>
                    {usuario.role === "barber" ? (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <ButtonMenuAgenda>AGENDAR</ButtonMenuAgenda>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                          }}
                        >
                          <ButtonMenuAgenda>HORARIOS MARCADOS</ButtonMenuAgenda>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "20px",
                      }}
                    >
                      <form
                        onSubmit={handleSubmit}
                        style={{
                          width: "48%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ display: "flex" }}>
                          <div style={{ width: "180px" }}>
                            <span>Data: </span>
                            <div>
                              <input type="date" key="data" />
                            </div>
                          </div>
                          <div>
                            <span>Horario:</span>
                            <div>
                              <select key="cmbhoras">
                                <option value="09:00:00">09:00</option>
                                <option value="10:00:00">10:00</option>
                                <option value="11:00:00">11:00</option>
                                <option value="12:00:00">12:00</option>
                                <option value="13:00:00">13:00</option>
                                <option value="14:00:00">14:00</option>
                                <option value="15:00:00">15:00</option>
                                <option value="16:00:00">16:00</option>
                                <option value="17:00:00">17:00</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div>
                          <span>Descrição:</span>
                          <div>
                            <textarea cols="30" rows="10" key="descricao" />
                          </div>
                        </div>
                        <button type="submit">Concluir</button>
                      </form>
                      <GridAgenda>
                        <ContentItemGrid>
                          <ItemGridNome
                            style={{
                              width: "25%",
                              textAlign: "center",
                              fontWeight: "bold",
                            }}
                          >
                            NOME
                          </ItemGridNome>
                          <ItemGridHorario
                            style={{
                              width: "75%",
                              textAlign: "center",
                              fontWeight: "bold",
                              marginLeft: "2px",
                            }}
                          >
                            HORARIO
                          </ItemGridHorario>
                        </ContentItemGrid>
                        {agendamentos.map((item) => (
                          <ContentItemGrid key={item.id}>
                            <ItemGridNome
                              style={{
                                width: "25%",
                                textAlign: "center",
                              }}
                            >
                              {item.user.name.split(" ")[0]}
                            </ItemGridNome>
                            <ItemGridHorario
                              style={{
                                width: "75%",
                                textAlign: "center",
                                marginLeft: "2px",
                              }}
                            >
                              {item.data} - {item.hora}
                            </ItemGridHorario>
                          </ContentItemGrid>
                        ))}
                      </GridAgenda>
                    </div>
                  </div>
                </ContentModal>
              </div>
            </Modal>
          </motion.div>
        </Content>
      </div>
    );
  } else {
    return null;
  }
}

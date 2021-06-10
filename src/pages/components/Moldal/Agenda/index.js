import React from "react";
import { ModalStateAgenda, DadosUsuario } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShowAgenda, setShowPopUp } from "../../../../redux/actions";
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
  ItemGridHorario,
  ItemGridAcoes,
  ItemGridSituacao,
  BodyGrid,
  ButtonAceitar,
  ButtonRecusar,
  ItemGridDesc,
} from "./style";
import { motion } from "framer-motion";
import Logo2 from "../../../assets/icons/Logo/Logo2";

import {
  Agendar,
  getAgendamentos,
  alteraSituacao,
} from "../../../../services/Agenda/services";

export default function ModalAgenda() {
  const dispatch = useDispatch();
  const usuario = useSelector(DadosUsuario);
  const showModal = useSelector(ModalStateAgenda);
  const [agendamentos, setAgendamentos] = React.useState([]);
  const [data, setData] = React.useState(dataAtualFormatada());

  function handleChange(e) {
    e.preventDefault();
    setData(e.nativeEvent.target.value);
  }

  React.useEffect(() => {
    if (usuario.token !== null) {
      let scheduling = getAgendamentos(data, usuario.token);

      scheduling.then((e) => {
        setAgendamentos(e.data.data);
      });
    }
  }, [data, usuario.token]);

  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";

    if (showModal) {
      let scheduling = getAgendamentos(dataAtualFormatada(), usuario.token);
      scheduling.then((e) => {
        setAgendamentos(e.data.data);
      });
    }
  }, [showModal, usuario.token]);

  function showModalAgenda() {
    dispatch(setShowAgenda());
  }

  function dataAtualFormatada() {
    let data = new Date(),
      dia = data.getDate().toString(),
      diaF = dia.length === 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(),
      mesF = mes.length === 1 ? "0" + mes : mes,
      anoF = data.getFullYear();
    return anoF + "-" + mesF + "-" + diaF;
  }

  function notificacao(tipo, msg) {
    dispatch(setShowPopUp(tipo, msg));
  }

  function updateSituacao(situacao, item) {
    let update = alteraSituacao(
      situacao,
      data + " " + item.hora + ":00",
      item.description,
      item.user.id,
      item.id,
      usuario.token
    );
    update.then((e) => {
      if (e.data.success) {
        notificacao(situacao === "ACEITO" ? "green" : "red", situacao);
        setTimeout(() => {
          notificacao(null, null);
        }, 3000);

        let scheduling = getAgendamentos(data, usuario.token);
        scheduling.then((e) => {
          setAgendamentos(e.data.data);
        });
      } else {
        notificacao("red", e.data.error[0].errorMessage);
        setTimeout(() => {
          notificacao(null, null);
        }, 3000);
      }
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date_time =
      event.target[0].value + " " + event.target[1].value + ":00";
    const description = event.target[2].value;
    const user_id = usuario.id;
    const token = usuario.token;

    let agendamento = Agendar(date_time, description, user_id, token);

    agendamento.then((e) => {
      if (e.data.success) {
        notificacao("green", "Agendado.");
        setTimeout(() => {
          notificacao(null, null);
        }, 3000);
        let scheduling = getAgendamentos(dataAtualFormatada(), usuario.token);
        scheduling.then((e) => {
          setAgendamentos(e.data.data);
        });
      } else {
        notificacao("red", e.data.error[0].errorMessage);
        setTimeout(() => {
          notificacao(null, null);
        }, 3000);
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
                      <div>
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
                            <ButtonMenuAgenda>
                              HORARIOS MARCADOS
                            </ButtonMenuAgenda>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          <span style={{ marginRight: "20px" }}>Data: </span>
                          <div>
                            <input
                              type="date"
                              key="data"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "20px",
                          }}
                        >
                          <GridAgenda>
                            <div style={{ width: "640px" }}>
                              <ContentItemGrid>
                                <ItemGridNome
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                  }}
                                >
                                  NOME
                                </ItemGridNome>
                                <ItemGridHorario
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    borderRadius: "0px",
                                  }}
                                >
                                  HORARIO
                                </ItemGridHorario>
                                <ItemGridAcoes
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ACEITAR/RECUSAR
                                </ItemGridAcoes>
                              </ContentItemGrid>
                            </div>
                            <BodyGrid className="Grid">
                              {agendamentos.map((item, index) => (
                                <ContentItemGrid key={item.id + "" + index}  className="tooltip">
                                   <span className="tooltiptext">{item.description ? item.description : '...'}</span>
                                  <ItemGridNome
                                    style={{
                                      textAlign: "center",
                                    }}
                                  >
                                    {item.user.name.split(" ")[0]}
                                  </ItemGridNome>
                                  <ItemGridHorario
                                    style={{
                                      textAlign: "center",
                                    }}
                                  >
                                    {item.data} - {item.hora}
                                  </ItemGridHorario>
                                  <ItemGridAcoes
                                    style={{
                                      textAlign: "center",
                                    }}
                                  >
                                    {item.status === "ACEITO" ? (
                                      <ButtonAceitar
                                        style={{
                                          backgroundColor: "green",
                                          color: "white",
                                        }}
                                      >
                                        Aceito
                                      </ButtonAceitar>
                                    ) : (
                                      <ButtonAceitar
                                        onClick={() => {
                                          updateSituacao("ACEITO", item);
                                        }}
                                      >
                                        Aceitar
                                      </ButtonAceitar>
                                    )}
                                    {item.status === "RECUSADO" ? (
                                      <ButtonRecusar
                                        style={{
                                          backgroundColor: "red",
                                          color: "white",
                                        }}
                                      >
                                        Recusado
                                      </ButtonRecusar>
                                    ) : (
                                      <ButtonRecusar
                                        onClick={() => {
                                          updateSituacao("RECUSADO", item);
                                        }}
                                      >
                                        Recusar
                                      </ButtonRecusar>
                                    )}
                                  </ItemGridAcoes>
                                </ContentItemGrid>
                              ))}
                            </BodyGrid>
                          </GridAgenda>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              width: "55%",
                            }}
                          >
                            <ButtonMenuAgenda
                              style={{
                                borderTopRightRadius: "0px",
                                borderBottomRightRadius: "0px",
                              }}
                            >
                              AGENDAR
                            </ButtonMenuAgenda>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            <ButtonMenuAgenda
                              style={{
                                borderTopLeftRadius: "0px",
                                borderBottomLeftRadius: "0px",
                              }}
                            >
                              HORARIOS MARCADOS
                            </ButtonMenuAgenda>
                          </div>
                        </div>
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
                                  <input
                                    type="date"
                                    key="data"
                                    onChange={(e) => handleChange(e)}
                                  />
                                </div>
                              </div>
                              <div>
                                <span>Horario:</span>
                                <div>
                                  <select key="cmbhoras">
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
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
                            <div>
                              <ContentItemGrid>
                                <ItemGridNome
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    width: "110px",
                                  }}
                                >
                                  NOME
                                </ItemGridNome>
                                <ItemGridHorario
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    borderRadius: "0px",
                                    width: "240px",
                                  }}
                                >
                                  HORARIO
                                </ItemGridHorario>
                                <ItemGridSituacao
                                  style={{
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    borderTopRightRadius: "10px",
                                    borderBottomRightRadius: "10px",
                                  }}
                                >
                                  SITUAÇÃO
                                </ItemGridSituacao>
                              </ContentItemGrid>
                            </div>
                            <BodyGrid className="Grid">
                              {agendamentos.map((item, index) =>
                                item.user.id === usuario.id ? (
                                  <ContentItemGrid key={item.id + "" + index}>
                                    <ItemGridNome
                                      style={{
                                        textAlign: "center",
                                        width: "130px",
                                      }}
                                    >
                                      {item.user.name.split(" ")[0]}
                                    </ItemGridNome>
                                    <ItemGridHorario
                                      style={{
                                        textAlign: "center",
                                        borderRadius: "0px",
                                        width: "220px",
                                      }}
                                    >
                                      {item.data} - {item.hora}
                                    </ItemGridHorario>
                                    <ItemGridSituacao
                                      style={{
                                        textAlign: "center",
                                        borderTopRightRadius: "10px",
                                        borderBottomRightRadius: "10px",
                                        width: "110px",
                                      }}
                                    >
                                      {item.status}
                                    </ItemGridSituacao>
                                  </ContentItemGrid>
                                ) : (
                                  <div />
                                )
                              )}
                            </BodyGrid>
                          </GridAgenda>
                        </div>
                      </div>
                    )}
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

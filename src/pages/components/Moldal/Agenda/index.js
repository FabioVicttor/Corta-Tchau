import React from "react";
import { ModalStateAgenda,ModalAgendaCorte } from "../../../../redux/selectors";
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
} from "./style";
import { motion } from "framer-motion";
import Logo2 from "../../../assets/icons/Logo/Logo2";

export default function ModalAgenda() {
  const dispatch = useDispatch();
  const showModal = useSelector(ModalStateAgenda);
  const corte = useSelector(ModalAgendaCorte);

  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  function showModalAgenda() {
    dispatch(setShowAgenda());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = event.target[0].value;
    const horario = event.target[1].value;
    // const corte = event.target[2].value;
    const descricao = event.target[3].value;

    const string = `
      {"data": "${data}",
      "horario": "${horario}",
      "descricao": "${descricao}", 
      "corte": "${corte}"
    }`;
    const obj = JSON.parse(string);
    console.log(obj);
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
              <form onSubmit={handleSubmit}>
                <ContentModal>
                  <ContentX onClick={showModalAgenda}>
                    <X1></X1>
                    <X2></X2>
                  </ContentX>
                  <ContentLogo>
                    <Logo2 />
                  </ContentLogo>
                  <div style={{ marginTop: "70px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div>
                        <div>
                          <span>Data: </span>
                          <div>
                            <input type="date" key="data" />
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
                        {/* <div>
                          <span>Corte:</span>
                          <div>
                            <input key="corte" type="text" readOnly />
                          </div>
                        </div> */}
                      </div>
                      <div>
                        <span>Descrição:</span>
                        <div>
                          <textarea
                            cols="30"
                            rows="10"
                            key="descricao"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "90px",
                    }}
                  >
                    <button>Concluir</button>
                  </div>
                </ContentModal>
              </form>
            </Modal>
          </motion.div>
        </Content>
      </div>
    );
  } else {
    return null;
  }
}

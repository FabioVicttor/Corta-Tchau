import React from "react"; // ,{ useCallback, useReducer, useState }
// import axios from "axios";
import { ModalStateContatos } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShowContatos } from "../../../../redux/actions";
import {
  Content,
  Modal,
  ContentModal,
  ItemModal,
  ContentX,
  X1,
  X2,
  ContentItens,
  ContentTitle,
} from "./style";
import { motion } from "framer-motion";
import AnimetedDiv from "../../Animeted/AnimatedDiv";
import TelefoneIcon from "../../../assets/icons/Contatos/Telefone";

// import { useSpring, animated } from "react-spring";

// import { Login } from "../../../../services/Login/services";

export default function ModalContatos() {
  // Card 3D
  // const calc = (x, y) => [
  //   (y - window.innerHeight / 2) / 30,
  //   -(x - window.innerWidth / 2) / 40,
  //   1.1,
  // ];
  // const trans = (x, y, s) =>
  //   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  // const [propsBahia, setBahia] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 500, friction: 40 },
  // }));
  // const [propsEvaldo, setEvaldo] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 500, friction: 40 },
  // }));
  // const [propsOrtega, setOrtega] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 500, friction: 40 },
  // }));
  // const [propsSimonoia, setSimonoia] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 500, friction: 40 },
  // }));
  // Card 3D

  const dispatch = useDispatch();
  const showModal = useSelector(ModalStateContatos);

  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  function showModalContatos() {
    dispatch(setShowContatos());
  }

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
              <form>
                <ContentModal>
                  <ContentX onClick={showModalContatos}>
                    <X1></X1>
                    <X2></X2>
                  </ContentX>
                  <ContentTitle>
                    <AnimetedDiv>
                      SUPORTE
                    </AnimetedDiv>
                  </ContentTitle>
                  <ContentItens>
                    <AnimetedDiv>
                      <ItemModal>
                        <div style={{
                          textAlign: "center"
                          }}>
                          <div>
                            <h1>Bahia</h1>
                          </div>

                          <div style={{
                            color: "black",
                            fontSize: "20px",
                            }}>
                            <AnimetedDiv>
                              <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                              }}>
                                <div style={{
                                  width:"20px",
                                }}>
                                  <TelefoneIcon />
                                </div>
                                
                                <div style={{
                                  marginLeft: "10px",
                                }}>
                                  (11) 924242424
                                </div>
                              </div>
                            </AnimetedDiv>
                          </div>
                        </div>
                      </ItemModal>
                    </AnimetedDiv>
                    <AnimetedDiv>
                      <ItemModal>
                        <div style={{textAlign: "center"}}>
                          <div>
                            <h1>Evaldo</h1>
                          </div>

                          <div style={{
                            color: "black",
                            fontSize: "20px",
                            }}>
                            <AnimetedDiv>
                              <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                                }}>
                                <div style={{
                                  width:"20px",
                                  }}>
                                  <TelefoneIcon />
                                </div>
                                
                                <div style={{
                                  marginLeft: "10px",
                                  }}>
                                  (11) 912345678
                                </div>
                              </div>
                            </AnimetedDiv>
                          </div>
                        </div>
                      </ItemModal>
                    </AnimetedDiv>
                    <AnimetedDiv>
                      <ItemModal>
                        <div style={{textAlign: "center"}}>
                          <div>
                            <h1>Simonoia</h1>
                          </div>

                          <div style={{
                            color: "black",
                            fontSize: "20px",
                            }}>
                            <AnimetedDiv>
                              <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                                }}>
                                <div style={{
                                  width:"20px",
                                  }}>
                                  <TelefoneIcon />
                                </div>
                                
                                <div style={{
                                  marginLeft: "10px",
                                  }}>
                                  (11) 987654321
                                </div>
                              </div>
                            </AnimetedDiv>
                          </div>
                        </div>
                      </ItemModal>
                    </AnimetedDiv>
                    <AnimetedDiv>
                      <ItemModal>
                        <div style={{textAlign: "center"}}>
                          <div>
                            <h1>Mortadelinha</h1>
                          </div>

                          <div style={{
                            color: "black",
                            fontSize: "20px",
                            }}>
                            <AnimetedDiv>
                              <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center"
                                }}>
                                <div style={{
                                  width:"20px",
                                  }}>
                                  <TelefoneIcon />
                                </div>
                                
                                <div style={{
                                  marginLeft: "10px",
                                  }}>
                                  (11) 955554444
                                </div>
                              </div>
                            </AnimetedDiv>
                          </div>
                        </div>
                      </ItemModal>
                    </AnimetedDiv>
                    {/* <AnimetedDiv>
                      <ItemModal>
                        <h1>Evaldo</h1>
                      </ItemModal>
                    </AnimetedDiv>
                    <AnimetedDiv>
                      <ItemModal>
                        <h1>Ortega</h1>
                      </ItemModal>
                    </AnimetedDiv>
                    <AnimetedDiv>
                      <ItemModal>
                        <h1>Simonoia</h1>
                      </ItemModal>
                    </AnimetedDiv> */}
                  </ContentItens>
                </ContentModal>
              </form>
            </Modal>
          </motion.div>
        </Content>
      </div>
    );
  }
  
  else {
    return null;
  }
}

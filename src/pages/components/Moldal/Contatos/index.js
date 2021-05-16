import React from "react";

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
  ContentDetalheItemModal,
  DetalheItemModal,
  ContentIconItemModal,
  ContentTelItemModal,
} from "./style";
import { motion } from "framer-motion";
import AnimatedDiv from "../../Animated/AnimatedDiv";
import TelefoneIcon from "../../../assets/icons/Contatos/Telefone";

export default function ModalContatos() {
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
                    <AnimatedDiv>SUPORTE</AnimatedDiv>
                  </ContentTitle>
                  <ContentItens>
                    <AnimatedDiv>
                      <ItemModal>
                        <div>
                          <div>
                            <h1>Bahia</h1>
                          </div>
                          <ContentDetalheItemModal>
                            <AnimatedDiv>
                              <DetalheItemModal>
                                <ContentIconItemModal>
                                  <TelefoneIcon />
                                </ContentIconItemModal>
                                <ContentTelItemModal>
                                  (11) 924242424
                                </ContentTelItemModal>
                              </DetalheItemModal>
                            </AnimatedDiv>
                          </ContentDetalheItemModal>
                        </div>
                      </ItemModal>
                    </AnimatedDiv>
                    <AnimatedDiv>
                      <ItemModal>
                        <div>
                          <div>
                            <h1>Evaldo</h1>
                          </div>
                          <ContentDetalheItemModal>
                            <AnimatedDiv>
                              <DetalheItemModal>
                                <ContentIconItemModal>
                                  <TelefoneIcon />
                                </ContentIconItemModal>
                                <ContentTelItemModal>
                                  (11) 912345678
                                </ContentTelItemModal>
                              </DetalheItemModal>
                            </AnimatedDiv>
                          </ContentDetalheItemModal>
                        </div>
                      </ItemModal>
                    </AnimatedDiv>
                    <AnimatedDiv>
                      <ItemModal>
                        <div>
                          <div>
                            <h1>Simonoia</h1>
                          </div>
                          <ContentDetalheItemModal>
                            <AnimatedDiv>
                              <DetalheItemModal>
                                <ContentIconItemModal>
                                  <TelefoneIcon />
                                </ContentIconItemModal>
                                <ContentTelItemModal>
                                  (11) 987654321
                                </ContentTelItemModal>
                              </DetalheItemModal>
                            </AnimatedDiv>
                          </ContentDetalheItemModal>
                        </div>
                      </ItemModal>
                    </AnimatedDiv>
                    <AnimatedDiv>
                      <ItemModal>
                        <div>
                          <div>
                            <h1>Mortadelinha</h1>
                          </div>
                          <ContentDetalheItemModal>
                            <AnimatedDiv>
                              <DetalheItemModal>
                                <ContentIconItemModal>
                                  <TelefoneIcon />
                                </ContentIconItemModal>

                                <ContentTelItemModal>
                                  (11) 955554444
                                </ContentTelItemModal>
                              </DetalheItemModal>
                            </AnimatedDiv>
                          </ContentDetalheItemModal>
                        </div>
                      </ItemModal>
                    </AnimatedDiv>
                  </ContentItens>
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

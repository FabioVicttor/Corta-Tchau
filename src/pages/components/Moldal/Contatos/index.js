import React
// ,{ useCallback, useReducer, useState } 
from "react";
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
  TableContatos,
} from "./style";
import { motion } from "framer-motion";

// import { Login } from "../../../../services/Login/services";

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
                  <div style={{ marginTop: "170px" }}>
                    <ItemModal>
                      <TableContatos>
                        <thead>
                          <th>Nome</th>
                          <th>RA</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Evandro Casarotte</td>
                            <td>1802920</td>
                          </tr>
                          <tr>
                            <td>Fabu Bahia</td>
                            <td>1804327</td>
                          </tr>
                          <tr>
                            <td>Felipe Ortega</td>
                            <td>1802150</td>
                          </tr>
                          <tr>
                            <td>Felipe Simonette</td>
                            <td>1802920</td>
                          </tr>
                        </tbody>
                      </TableContatos>
                    </ItemModal>
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

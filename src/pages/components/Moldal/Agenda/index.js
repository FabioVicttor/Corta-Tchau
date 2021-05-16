import React from "react";
import { ModalStateAgenda } from "../../../../redux/selectors";
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

  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  function showModalAgenda() {
    dispatch(setShowAgenda());
  }

  const handleSubmit = async (event) => {
   
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
                    <div></div>
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

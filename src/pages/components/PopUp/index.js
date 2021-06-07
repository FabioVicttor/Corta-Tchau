import React from "react";

import { ModalStatePopUp } from "../../../redux/selectors";
import { useSelector /*useDispatch*/ } from "react-redux";
// import { setShowPopUp } from "../../../redux/actions";
import { Content, ContentPopUp, Mensagem /*ContentX, X1, X2*/ } from "./style";
// import { motion } from "framer-motion";
// import AnimatedDiv from "../../Animated/AnimatedDiv";

export default function PopUpNotificacao() {
  // const dispatch = useDispatch();
  const showPopUp = useSelector(ModalStatePopUp);

  // function notificacao() {
  //   dispatch(setShowPopUp(null, null));
  // }

  if (showPopUp.showPopUp) {
    return (
      <Content>
        <ContentPopUp cor={showPopUp.tipo}>
          {/* <ContentX onClick={notificacao}>
            <X1></X1>
            <X2></X2>
          </ContentX> */}
          <Mensagem>
            <span key="msg">{showPopUp.msg}</span>
          </Mensagem>
        </ContentPopUp>
      </Content>
    );
  } else {
    return null;
  }
}

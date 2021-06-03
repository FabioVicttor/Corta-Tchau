import React from "react";

import { ModalStatePopUp } from "../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShowPopUp } from "../../../redux/actions";
import { ContentPopUp, Mensagem, ContentX, X1, X2 } from "./style";
// import { motion } from "framer-motion";
// import AnimatedDiv from "../../Animated/AnimatedDiv";

export default function PopUpNotificacao() {
  const dispatch = useDispatch();
  const showPopUp = useSelector(ModalStatePopUp);

  function notificacao() {
    dispatch(setShowPopUp());
  }

  if (!showPopUp) {
    return (
      <ContentPopUp>
        <ContentX onClick={notificacao}>
          <X1></X1>
          <X2></X2>
        </ContentX>
        <Mensagem>
          <span>MENSAGEM</span>
        </Mensagem>
      </ContentPopUp>
    );
  } else {
    return null;
  }
}

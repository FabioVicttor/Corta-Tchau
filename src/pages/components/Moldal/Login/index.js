import React from "react";
import { ModalState, DadosUsuario } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShow, setShowCadastro, setLogin } from "../../../../redux/actions";
import {
  Content,
  Modal,
  ContentModal,
  ItemModal,
  InputLogin,
  ButtonLogin,
  Item,
  ContentX,
  X1,
  X2,
  ContentLogo,
} from "./style";
import { motion } from "framer-motion";
import Logo2 from "../../../assets/icons/Logo/Logo2";

import { Loginho } from "../../../../services/Login/services";

export default function ModalLogin() {
  const dispatch = useDispatch();
  const showModal = useSelector(ModalState);
  const usuario = useSelector(DadosUsuario);

  React.useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  function showModalLogin() {
    dispatch(setShow());
  }

  function showModalCadastro() {
    dispatch(setShowCadastro());
    dispatch(setShow());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = Loginho(event.target[0].value, event.target[1].value);

    user.then((e) => {
      if (e !== "error") {
        dispatch(
          setLogin(e.user.phone, e.user.name, e.user.role, e.user.id, e.token)
        );
        // dispatch(setShow());
      }
    });
  };

  function DesLoginho() {
    dispatch(setLogin(null, null, null, null, null));
  }

  if (showModal) {
    if (usuario.id == null) {
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
                    <ContentX onClick={showModalLogin}>
                      <X1></X1>
                      <X2></X2>
                    </ContentX>
                    <ContentLogo>
                      <Logo2 />
                    </ContentLogo>
                    <div style={{ marginTop: "70px" }}>
                      <ItemModal>
                        <InputLogin
                          name="loginTelefone"
                          id="loginTelefone"
                          type="text"
                          placeholder="Telefone"
                        />
                      </ItemModal>
                      <ItemModal>
                        <InputLogin
                          name="senhalogin"
                          id="senhalogin"
                          type="password"
                          placeholder="Senha"
                          maxLength="20"
                        />
                      </ItemModal>
                      <ItemModal>
                        <ButtonLogin type="submit">ENTRAR</ButtonLogin>
                      </ItemModal>
                      <ItemModal>
                        <Item>Recuperar Senha</Item>
                        <Item onClick={showModalCadastro}>Registrar-se</Item>
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
                <ContentModal>
                  <ContentX onClick={showModalLogin}>
                    <X1></X1>
                    <X2></X2>
                  </ContentX>
                  <ContentLogo>
                    <Logo2 />
                  </ContentLogo>
                  <div style={{ marginTop: "70px" }}>
                    <div style={{ textAlign: "center" }}>
                      <h1>Bem vindo {usuario.name}!</h1>
                    </div>
                    <div>
                      <ItemModal>
                        <ButtonLogin onClick={DesLoginho}>SAIR</ButtonLogin>
                      </ItemModal>
                    </div>
                  </div>
                </ContentModal>
              </Modal>
            </motion.div>
          </Content>
        </div>
      );
    }
  } else {
    return null;
  }
}

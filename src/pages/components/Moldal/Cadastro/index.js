import React from "react";
import { ModalStateCadastro } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShowCadastro } from "../../../../redux/actions";
import {
  Content,
  Modal,
  ContentModal,
  ItemModal,
  InputCadastro,
  Button,
  ContentX,
  X1,
  X2,
  ContentLogo,
  ItemModalButton,
  Item
} from "./style";
import { motion } from "framer-motion";
import Logo2 from "../../../assets/icons/Logo/Logo2";

export default function ModalCadastro() {
  const dispatch = useDispatch();
  const ModalCadastro = useSelector(ModalStateCadastro);

  React.useEffect(() => {
    document.body.style.overflow = ModalCadastro ? "hidden" : "auto";
  }, [ModalCadastro]);

  function showModalCadastro() {
    dispatch(setShowCadastro());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  if (ModalCadastro) {
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
                  <ContentX onClick={showModalCadastro}>
                    <X1></X1>
                    <X2></X2>
                  </ContentX>
                  <ContentLogo>
                    <Logo2 />
                  </ContentLogo>
                  <div style={{ marginTop: "70px" }}>
                    <ItemModal>
                      <InputCadastro
                        name="cadastroNome"
                        id="cadastroNome"
                        type="text"
                        placeholder="Nome"
                      />
                    </ItemModal>
                    <ItemModal>
                      <InputCadastro
                        name="cadastroTelefone"
                        id="cadastroTelefone"
                        type="text"
                        placeholder="Telefone"
                      />
                    </ItemModal>
                    <ItemModal>
                      <InputCadastro
                        name="senhaCadastro"
                        id="senhaCadastro"
                        type="password"
                        placeholder="Senha"
                        maxLength="20"
                      />
                    </ItemModal>
                    <ItemModalButton>
                      <Button type="submit">CADASTRAR</Button>
                      <Item type="submit">Efetuar Login</Item>
                    </ItemModalButton>
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

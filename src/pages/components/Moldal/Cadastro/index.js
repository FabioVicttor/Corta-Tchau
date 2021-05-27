import React from "react";
import { ModalState, DadosUsuario, ModalStateCadastro } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShow, setLogin, setShowCadastro } from "../../../../redux/actions";
import {
  Content,
  Modal,
  ContentModal,
  ItemModal,
  InputCadastro,
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
  const ModalCadastro = useSelector(ModalStateCadastro);

  React.useEffect(() => {
    document.body.style.overflow = ModalCadastro ? "hidden" : "auto";
  }, [ModalCadastro]);

  function showModalCadastro() {
    dispatch(setShowCadastro());
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
                        name="cadastroTelefone"
                        id="cadastroTelefone"
                        type="text"
                        placeholder="Telefone"
                      />
                    </ItemModal>
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
                        name="senhaCadastro"
                        id="senhaCadastro"
                        type="password"
                        placeholder="Senha"
                        maxLength="20"
                      />
                    </ItemModal>
                    <ItemModal>
                      <ButtonLogin type="submit">CADASTRAR</ButtonLogin>
                    </ItemModal>
                    <ItemModal>
                      <Item>Já possuo um cadastro</Item>
                    </ItemModal>
                  </div>
                </ContentModal>
              </form>
            </Modal>
          </motion.div>
        </Content>
      </div>
    );
    //  else {
    //   return (
    //     <div>
    //       <Content>
    //         <motion.div
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           transition={{ delay: 0.2 }}
    //           style={{
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //           }}
    //         >
    //           <Modal>
    //             <ContentModal>
    //               <ContentX onClick={showModalLogin}>
    //                 <X1></X1>
    //                 <X2></X2>
    //               </ContentX>
    //               <ContentLogo>
    //                 <Logo2 />
    //               </ContentLogo>
    //               <div style={{ marginTop: "70px" }}>
    //                 <div style={{ textAlign: "center" }}>
    //                   <h1>Bem vindo {usuario.name}!</h1>
    //                 </div>
    //                 <div>
    //                   <ItemModal>
    //                     <ButtonLogin onClick={DesLoginho}>SAIR</ButtonLogin>
    //                   </ItemModal>
    //                 </div>
    //               </div>
    //             </ContentModal>
    //           </Modal>
    //         </motion.div>
    //       </Content>
    //     </div>
    //   );
    // }
  } else {
    return null;
  }
}

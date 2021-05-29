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
import { Cadastrar } from "../../../../services/Cadastro/services";

export default function ModalCadastro() {
  const dispatch = useDispatch();
  const ModalCadastro = useSelector(ModalStateCadastro);

  let cadastrado = false;
  let cadastroValido = true;

  React.useEffect(() => {
    document.body.style.overflow = ModalCadastro ? "hidden" : "auto";
  }, [ModalCadastro]);

  function showModalCadastro() {
    dispatch(setShowCadastro());
  }

  const handleSubmit = async (event) => {
    // debugger;
    event.preventDefault();

    const nome = event.target[0].value;
    const telefone = event.target[1].value;
    const senha = event.target[2].value;
    const senhaConfirmada = event.target[3].value;

    if(validaForm(nome, telefone, senha, senhaConfirmada)) {
      const cadastro = Cadastrar(telefone, nome, senha);

      cadastroValido = true;
      cadastrado = cadastro.then((response, reject) => {
        if(response)
          console.log(response);
        else
          console.log(reject);
      });
    }
    else{
      cadastroValido = false;
      console.log('form inválido');
    }
  };

  const validaForm = (nome, telefone, senha, confirmaSenha) => {
    if(nome.length > 0 && nome.length <= 30) {
      if(telefone.length == 11 && (senha.length > 0 && senha.length <= 20)){
        if(senha === confirmaSenha)
          return true;
      }
    }
    else
      return false;
  }

  if (ModalCadastro) {
    if(cadastrado == false){
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
                          placeholder="Telefone (DDD + número)"
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
                        <InputCadastro
                          name="confirmarSenhalogin"
                          id="confirmarSenhalogin"
                          type="password"
                          placeholder="Confirme a senha"
                          maxLength="20"
                        />
                      </ItemModal>
                      {cadastroValido ? 
                        <ItemModalButton>
                          <Button type="submit">CADASTRAR</Button>
                          <Item type="submit">Efetuar Login</Item>
                        </ItemModalButton> : 
                        <ItemModalButton>
                          *Dados inválidos.
                          <Button type="submit">CADASTRAR</Button>
                          <Item type="submit">Efetuar Login</Item>
                        </ItemModalButton>
                        }
                      
                    </div>
                  </ContentModal>
                </form>
              </Modal>
            </motion.div>
          </Content>
        </div>
      );
    }
    else {
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
                  <ContentX onClick={showModalCadastro}>
                    <X1></X1>
                    <X2></X2>
                  </ContentX>
                  <ContentLogo>
                    <Logo2 />
                  </ContentLogo>
                  <div style={{ marginTop: "70px" }}>
                    <div style={{ textAlign: "center" }}>
                      <h1>Usuário cadastrado com sucesso!</h1>
                    </div>
                    <div>
                      <ItemModal>
                        <Button onClick={showModalCadastro}>LOGIN</Button>
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
  }
  else {
    return null;
  }
}

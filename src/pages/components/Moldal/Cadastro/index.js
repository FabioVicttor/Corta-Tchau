import React from "react";
import { ModalStateCadastro } from "../../../../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { setShowCadastro, setShow } from "../../../../redux/actions";
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

  let [cadastrado, setCadastrado] = React.useState(false);
  const [cadastroValido, setCadastroValido] = React.useState(true);

  React.useEffect(() => {
    document.body.style.overflow = ModalCadastro ? "hidden" : "auto";
  }, [ModalCadastro]);

  function showModalCadastro() {
    dispatch(setShowCadastro());
  }

  function showModalLogin(){
    dispatch(setShowCadastro());
    dispatch(setShow());
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target[0].value;
    const telefone = event.target[1].value;
    const senha = event.target[2].value;
    const senhaConfirmada = event.target[3].value;

    if(validaForm(nome, telefone, senha, senhaConfirmada)) {
      const cadastro = Cadastrar(telefone, nome, senha);

      setCadastroValido(true);
       cadastro.then((response, reject) => {
        if(response){
          setCadastrado(true);
        }
        else
        setCadastrado(false);
      });
    }
  };

  const validaForm = (nome, telefone, senha, confirmaSenha) => {
    if((nome.length > 0 && nome.length <= 30) &&
      telefone.length == 11 && (senha.length > 0 && senha.length <= 20) &&
      senha === confirmaSenha
      ) {
        return true;
    }
    else {
      setCadastroValido(false);
      console.log('form inválido');
      return false;
    }
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
                          <Item onClick={showModalLogin}>Efetuar Login</Item>
                        </ItemModalButton> : 
                        <ItemModalButton>
                          *Dados inválidos.
                          <Button style={{marginTop: 15}} type="submit">CADASTRAR</Button>
                          <Item onClick={showModalLogin}>Efetuar Login</Item>
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
                        <Button onClick={showModalLogin}>LOGIN</Button>
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

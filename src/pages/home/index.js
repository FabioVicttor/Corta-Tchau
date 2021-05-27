import React from "react";
import { ContentHome } from "./style";
import Body from "../components/Body/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

import { ModalState } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function Home({ open, setOpen }) {
  const showModal = useSelector(ModalState);
  return (
    <ContentHome style={{ filter: showModal ? "blur(3px)" : "none" }}>
      <Header />
      <Body open={open} setOpen={setOpen} />
      <Footer />
    </ContentHome>
  );
}

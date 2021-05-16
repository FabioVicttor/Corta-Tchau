import React from "react";
import { ContentHome } from "./style";
import Body from "../components/Body/index";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

export default function Home({ open, setOpen }) {
  return (
    <ContentHome>
      <Header />
      <Body open={open} setOpen={setOpen}/>
      <Footer />
    </ContentHome>
  );
}

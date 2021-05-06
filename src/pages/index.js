import React, { useState, useRef } from "react";
import Burger from "./components/Menu/Burger/Burger";
import Menu from "./components/Menu/index";
import Home from "../pages/home/index";
import LoginModal from "./components/Moldal/Login/index";
import { useOnClickOutside } from "./hooks";

export default function Index() {
  const [open, setOpen] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen}></Burger>
          <Menu open={open} setOpen={setOpen}></Menu>
        </div>
        <LoginModal />
        <Home />
      </div>
    </div>
  );
}

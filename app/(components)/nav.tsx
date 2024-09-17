"use client";

import { useState } from "react";

import Header from "./header";
import Menu from "./menu";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function handleClose() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <Header handleClose={handleClose} menuOpen={menuOpen} />
      <Menu handleClose={handleClose} menuOpen={menuOpen} />
    </>
  );
}

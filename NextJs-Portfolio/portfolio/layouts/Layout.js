import React from "react";
import { Container } from "./LayoutStyles";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
export const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <Header />

        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
};

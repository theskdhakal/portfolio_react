import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <input type="checkbox" id="darkmode" class="dark-mode-checkbox" />
      <div class="wrapper">
        <label htmlFor="darkmode">
          <i class="fa fa-toggle-on dark-mode-toggle" aria-hidden="true"></i>
        </label>

        <Header />

        {children}

        <Footer />
      </div>
    </>
  );
};

// import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="layout font-mono">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

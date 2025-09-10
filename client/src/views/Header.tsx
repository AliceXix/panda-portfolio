import React from "react";
import logo from "../images/insta-logo.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <header>
          <a href="https://www.instagram.com/solanum_bean/" target="blank">
            <img src={logo} alt="insta logo" />
          </a>
          <a className="nav_menu" href="#contact">
            Contact
          </a>
          <a className="nav_menu" href="#portfolio">
            Portfolio
          </a>
        </header>
        <section className="centred-div">
          <div>
            <h1>Bean</h1>
            <main>
              A safe, inclusive space where art meets self-expression. I create
              tattoos that honor your story, celebrate your identity, and
              empower you to be unapologetically yourself.
            </main>
          </div>
        </section>
      </div>
    </>
  );
}

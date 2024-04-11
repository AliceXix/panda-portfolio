import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/insta-logo.png';

export default function Header() {

    return (
      <>
        <div className="header">
          <header>
            <a className='nav_menu' href="#contact">Contact</a>
            <a className='nav_menu' href="#portfolio">Portfolio</a>
            <a href="https://www.instagram.com/solanum_bean/" target='blank'>
              <img src={logo} alt="insta logo" />
            </a>
          </header>
          <section className="centred-div">
            <div>
              <h1>Bean</h1>
              <main>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi eum delectus odio voluptates harum magnam, assumenda
                officia culpa vero reprehenderit expedita reiciendis, deleniti
                doloribus, voluptatem impedit modi blanditiis sint asperiores!
              </main>
            </div>
          </section>
        </div>
      </>
    );
};
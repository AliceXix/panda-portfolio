import React from 'react';
import feminism from '../images/feminisme.png';
import neurodiv from '../images/neurodiv.png';
import bipoc from '../images/bipoc.png';
import lgbtq from '../images/lgbtq.png';

export default function Values() {

    return (
      <>
        <div className="values">
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={feminism} alt='feminism icon' />
              </div>
              <div className="title">
                <h2>First Part</h2>
              </div>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum atque assumenda deserunt minus doloremque alias nostrum
                reprehenderit deleniti incidunt asperiores?
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <img src={neurodiv} alt='neurodivergent icon'/>
              </div>
              <div className="title">
                <h2>Second Part</h2>
              </div>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum atque assumenda deserunt minus doloremque alias nostrum
                reprehenderit deleniti incidunt asperiores?
              </div>
            </div>

            <div className="card">
              <div className="icon">
                <img src={bipoc} alt='bipoc icon'/>
              </div>
              <div className="title">
                <h2>Third Part</h2>
              </div>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum atque assumenda deserunt minus doloremque alias nostrum
                reprehenderit deleniti incidunt asperiores?
              </div>
            </div>

            <div className="card">
              <div className="icon">
               <img src={lgbtq} alt='lgbtq icon'/>
              </div>
              <div className="title">
                <h2>Fourth Part</h2>
              </div>
              <div className="content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorum atque assumenda deserunt minus doloremque alias nostrum
                reprehenderit deleniti incidunt asperiores?
              </div>
            </div>
          </div>
          <div className="disclaimer">
            <h1>Portfolio</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, deleniti architecto? Nisi, iusto quibusdam nihil porro
              dolore quod quis laboriosam tempore fuga dicta quos assumenda iste
              sit maxime dolor hic eius quo omnis. Ipsam, repellat temporibus.
              Necessitatibus rem, quasi harum ad repellat, tempore non corrupti
              veniam numquam similique praesentium vitae odit officia eum
              ratione impedit deserunt fugit. Asperiores at corrupti{" "}
            </p>
          </div>
        </div>
      </>
    );
};
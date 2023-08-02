import React from 'react';
import feminism from '../images/feminisme.png';
import neurodiv from '../images/neurodiv.png';
import bipoc from '../images/bipoc.png';
import lgbtq from '../images/lgbtq.png';

export default function Values() {

    return (
      <>
        <div className="values">
          <div className="widgets">
            <div className="card">
              <img src={feminism} alt="feminism icon" />
              <h3>FEMINISM</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis ipsum nec sapien semper gravida. Aliquam et enim
                libero.
              </p>
            </div>

            <div className="card">
              <img src={neurodiv} alt="neurodivergent icon" />
              <h3>NEURODIVERGENT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis ipsum nec sapien semper gravida. Aliquam et enim
                libero.
              </p>
            </div>

            <div className="card">
              <img src={bipoc} alt="bipoc icon" />
              <h3>BIPOC</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis ipsum nec sapien semper gravida. Aliquam et enim
                libero.
              </p>
            </div>

            <div className="card">
              <img src={lgbtq} alt="lgbtq icon" />
              <h3>LGBTQ</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis ipsum nec sapien semper gravida. Aliquam et enim
                libero.
              </p>
            </div>
          </div>

          <section className="centred-div">
            <div>
              <h2>PORTFOLIO</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                sagittis ipsum nec sapien semper gravida. Aliquam et enim
                libero.
              </p>
            </div>
          </section>
        </div>
      </>
    );
};
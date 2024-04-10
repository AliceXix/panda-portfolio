import React from 'react';
import feminism from '../images/feminisme.png';
import neurodiv from '../images/neurodiv.png';
import bipoc from '../images/bipoc.png';
import lgbtq from '../images/lgbtq.png';

export default function Values() {

    return (
      <>
        <div className="values">
          <img src={bipoc} alt="bipoc icon" />
          <img src={neurodiv} alt="neurodivergent icon" />
          <h2>COME AS YOU ARE</h2>
          <img src={lgbtq} alt="lgbtq icon" />
          <img src={feminism} alt="feminism icon" />
        </div>
      </>
    );
};
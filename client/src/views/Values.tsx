import React from 'react';
import feminism from '../images/feminisme.png';
import neurodiv from '../images/neurodiv.png';
import bipoc from '../images/bipoc.png';
import lgbtq from '../images/lgbtq.png';

export default function Values() {

    return (
      <>
        <div className="values" id='portfolio'>
          <img src={bipoc} alt="bipoc icon" id='bipoc_icon' />
          <img src={neurodiv} alt="neurodivergent icon" />
          <h2>COME AS YOU ARE</h2>
          <img src={lgbtq} alt="lgbtq icon" id='lgbtq_icon' />
          <img src={feminism} alt="feminism icon" />
        </div>
      </>
    );
};
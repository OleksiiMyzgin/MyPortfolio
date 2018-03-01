import React from "react";
import PropTypes from 'prop-types';

import waxom from '../img/waxom.jpg';
import ungart from '../img/ungart.jpg';
import creative from '../img/creative.jpg';

const Portfolio = props => {

  const portfolio = props.data;

  return (
    <section id="portfolio" to="portfolio" id="portfolio" className="flex big_padding">
      <h3 className="title animate" data-animation="slideInRight">{portfolio.title}</h3>
      <div className="gallery container flex">

        <div className="card">
          <p className="card__text">
            {portfolio.Waxom.descr}
            <br />
            <span className="highlight">{portfolio.Waxom.tech}</span>
          </p>
          <img className=" img" src={waxom} alt=""/>
          <a href={portfolio.Waxom.img_link} className="card__btn btn-sm">{portfolio.Waxom.btn}</a>
        </div>

        <div className="card">
          <p className="card__text">
            {portfolio.Ungart.descr}
            <br />
            <span className="highlight">{portfolio.Ungart.tech}</span>
          </p>
          <img className=" img" src={ungart} alt=""/>
          <a href={portfolio.Ungart.img_link} className="card__btn btn-sm">{portfolio.Ungart.btn}</a>
        </div>

        <div className="card">
          <p className="card__text">
            {portfolio.Creative.descr}
            <br />
            <span className="highlight">{portfolio.Creative.tech}</span>
          </p>
          <img className=" img" src={creative} alt=""/>
          <a href={portfolio.Creative.img_link} className="card__btn btn-sm">{portfolio.Creative.btn}</a>
        </div>

      </div>
    </section>
  );
};

Portfolio.propTypes = {
  data: PropTypes.object.isRequired
};

export default Portfolio;

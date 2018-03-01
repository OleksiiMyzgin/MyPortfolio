import React from "react";
import Header from "./Header";
import PropTypes from 'prop-types';

const MainSection = props => {
  const main = props.data.main;

  return (
    <section className="main flex" id="home">
      <Header {...props} />
      <div className="main__text">
        {main.title}
        <span className="main__text_highlight">{main.name}</span>
        <br />
        {main.text}
      </div>
      <a className="main__button button page-scroll" dest="about">
        {main.more}
        <svg width="15px" height="13px" viewBox="0 0 15 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="right-arrow-(1)" fillRule="nonzero" className="svg__item" fill="#fdcd3b">
                  <path d="M14.730426,5.65576065 L9.32434077,0.249553753 C9.17002028,0.0952332657 8.96434077,0.0105273834 8.74503043,0.0105273834 C8.52547667,0.0105273834 8.31991886,0.0953549696 8.16559838,0.249553753 L7.67476673,0.740507099 C7.52056795,0.894584178 7.43561866,1.1003854 7.43561866,1.31981744 C7.43561866,1.53912779 7.52056795,1.75186613 7.67476673,1.9059432 L10.8286004,5.066714 L0.80872211,5.066714 C0.356957404,5.066714 0,5.4203854 0,5.87227181 L0,6.56634888 C0,7.01823529 0.356957404,7.40756592 0.80872211,7.40756592 L10.8643813,7.40756592 L7.67488844,10.5859838 C7.52068966,10.7403043 7.43574037,10.9405071 7.43574037,11.1599391 C7.43574037,11.3791278 7.52068966,11.5822515 7.67488844,11.7364503 L8.16572008,12.2258215 C8.32004057,12.380142 8.52559838,12.4642394 8.74515213,12.4642394 C8.96446247,12.4642394 9.17014199,12.3790467 9.32446247,12.2247262 L14.7305477,6.81864097 C14.8852333,6.66383367 14.9703043,6.45718053 14.9696957,6.23750507 C14.9701826,6.01709939 14.8852333,5.81032454 14.730426,5.65576065 Z" id="Shape"></path>
              </g>
          </g>
        </svg>
      </a>
    </section>
  );
};

MainSection.propTypes = {
  data: PropTypes.object.isRequired
};


export default MainSection;

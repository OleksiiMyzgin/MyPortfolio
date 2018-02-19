import React from "react";
import PropTypes from 'prop-types';
import me from '../img/Me.jpg';

import development from '../img/SVG/coding.svg';
import responsive from '../img/SVG/responsive.svg';
import ui from '../img/SVG/browser.svg';
import rocket from '../img/SVG/rocket.svg';

const AboutSection = props => {

  const about = props.data.about;

  return (
    <section to="about" id="about" className="big_padding">
      <div className="container flex">
        <h1 className="title animate" data-animation="slideInRight">{about.mainTitle}</h1>
        <div className="flex-row services">
          <div className="services__blocks flex">
            {/* first element */}
            <div className="services__item flex">
              <img src={development} className="icon development" alt=""/>
              <h3 className="text_title">{about.serviceList1.title}</h3>
              <p>{about.serviceList1.descr}</p>
            </div>
            {/* second element */}
            <div className="services__item flex">
              <img src={responsive} className="icon responsive" alt=""/>
              <h3 className="text_title">{about.serviceList2.title}</h3>
              <p>{about.serviceList2.descr}</p>
            </div>
          </div>
          <div className="services__blocks flex">
            {/* third element */}
            <div className="services__item flex">
              <img src={ui} className="icon ui" alt=""/>
              <h3 className="text_title">{about.serviceList3.title}</h3>
              <p>{about.serviceList3.descr}</p>
            </div>
            {/* fourth element */}
            <div className="services__item flex">
              <img src={rocket} className="icon rocket" alt=""/>
              <h3 className="text_title">{about.serviceList4.title}</h3>
              <p>{about.serviceList4.descr}</p>
            </div>
          </div>
        </div>
        <div className="skills-wrapper flex-row">
          <div className="skills flex">
            <img className="me" src={me} alt=""/>
            <h3 className="skills__title">{about.skills.me}</h3>
            <p className="skills__text">
              {about.skills.about}
              <br/>
              <span className="skills__page-link hightight">
                {about.skills.link}
              </span>
            </p>
          </div>
          <div className="skills-bars flex animate" data-animation="animated">
            <div className="skills-bars_bar bar flex">
              <div className="fill bar" style={{ width: '80%'}}>
                <div className="bar__tag flex">CSS</div>
              </div>
              <span>80%</span>
            </div>
            <div className="skills-bars_bar bar  flex">
              <div className="fill bar" style={{ width: '90%'}}>
                <div className="bar__tag flex">HTML</div>
              </div>
              <span>90%</span>
            </div>
            <div className="skills-bars_bar bar flex">
              <div className="fill bar" style={{ width: '80%'}}>
                <div className="bar__tag flex">JS</div>
              </div>
              <span>80%</span>
            </div>
            <div className="skills-bars_bar bar flex">
              <div className="fill bar" style={{ width: '70%'}}>
                <div className="bar__tag flex">React</div>
              </div>
              <span>70%</span>
            </div>
            <div className="skills-bars_bar bar flex">
              <div className="fill bar" style={{ width: '45%'}}>
                <div className="bar__tag flex">Node</div>
              </div>
              <span>45%</span>
            </div>
            <div className="skills-bars_bar bar flex">
              <div className="fill bar" style={{ width: '80%'}}>
                <div className="bar__tag flex">UI Design</div>
              </div>
              <span>80%</span>
            </div>
            <div className="skills-bars_bar bar flex">
              <div className="fill bar" style={{ width: '70%'}}>
                <div className="bar__tag flex">Photoshop</div>
              </div>
              <span>70%</span>
            </div>
            <div className="skills-bars_bar bar flex">
              <div className="fill bar" style={{ width: '70%'}}>
                <div className="bar__tag flex">Sketch</div>
              </div>
              <span>70%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutSection.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutSection;

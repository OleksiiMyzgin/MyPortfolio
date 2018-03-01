import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: "0"
    };
  }

  _setColor(item) {
    this.setState({ selected: item });
  }
  _isActive(value) {
    return (value === this.state.selected ? "menu__link active" : "menu__link");
  }

  render() {
    const menu = this.props.data.menu;

    return (
      <header className="header flex">
        <p className="header__icon">
          <span className="menu-line menu-line-1" />
          <span className="menu-line menu-line-2" />
          <span className="menu-line menu-line-3" />
        </p>

        <nav className="header__menu">
          <ul className="menu__list menu">
            <li className="menu__item">
              <a
                href="#home"
                className="menu__link page-scroll active"
                dest="home"
              >
                {menu.home}
              </a>
            </li>
            <li className="menu__item">
              <a
                href="#services"
                className="menu__link page-scroll"
                dest="about"
              >
                {menu.about}
              </a>
            </li>
            <li className="menu__item">
              <a
                href="#portfolio"
                className="menu__link page-scroll"
                dest="portfolio"
              >
                {menu.portfolio}
              </a>
            </li>
            <li className="menu__item">
              <a
                href="#contact"
                className="menu__link page-scroll"
                dest="contact"
              >
                {menu.contact}
              </a>
            </li>
          </ul>
          <ul className="menu__list__lang menu flex-row">
            <li className="menu__item">
              <a
                className={this._isActive("1")}
                data-lang="ENG"
                onClick={e => {
                  this.props.switchLanguage(e);
                  this._setColor("1");
                }}
              >
                EN
              </a>
            </li>
            <li className="menu__item">
              <a
                className={this._isActive("0")}
                data-lang="RU"
                onClick={e => {
                  this.props.switchLanguage(e);
                  this._setColor("0");
                }}
              >
                RU
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  data: PropTypes.object.isRequired
};

export default Header;

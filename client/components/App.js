import React from 'react';

// data
import dataRu from '../data/dataRu'
import dataEng from '../data/dataEng'
import animation from '../animation';

//components
import MainSection from './MainSection';
import AboutSection from './AboutSection.js';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';


class App extends React.Component {
  constructor() {
    super();
    this._loadData = this._loadData.bind(this);
    this._switchLanguage = this._switchLanguage.bind(this);
    //get initialState
    this.state = {
      data: {},
    };
  }

  componentWillMount(){
    this._loadData();
  }

  _loadData() {
    this.setState({
      data: dataRu
    });
  }

  componentDidMount() {
    animation();
  }

  _switchLanguage(e){
    const lang = e.target.dataset.lang

    if(lang === 'ENG') {
      this.setState({
        data: dataEng
      });
    }

    if (lang === "RU") {
      this.setState({
        data: dataRu
      });
    }

  }


  render(){
    const { data } = this.state;
    return(
      <div className="container-fluid">
        <MainSection
          data={data.header}
          switchLanguage={this._switchLanguage}
        />
        <AboutSection data={data.about}/>
        <Portfolio data={data.portfolio}/>
        <Contact data={data.contact}/>
        <Footer data={data.footer}/>
      </div>
    )
  }
}

export default App;
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
    } else if (lang === "RU") {
      this.setState({
        data: dataRu
      });
    } else {
      this.setState({
        data: dataEng
      });
    }
  }


  render(){
    return(
      <div className="container-fluid">
        <MainSection
          data={this.state.data}
          switchLanguage={this._switchLanguage}
        />
        <AboutSection data={this.state.data}/>
        <Portfolio data={this.state.data}/>
        <Contact data={this.state.data}/>
        <Footer data={this.state.data}/>
      </div>
    )
  }
}

export default App;
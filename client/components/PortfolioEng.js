import React from 'react';

// data
import dataEng from '../data/dataEng';
import animation from '../animation';

// components
import MainSection from './MainSection';
import AboutSection from './AboutSection';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

class PortfolioEng extends React.Component {
  constructor() {
    super();
    this.loadData = this.loadData.bind(this);
    //get initialState
    this.state = {
      data: {},
    };
  }

  componentWillMount(){
    this.loadData();
  }

  loadData() {
    this.setState({
      data: dataEng
    });
  }

  componentDidMount() {
    animation();
  }


  render(){
    return(
      <div className="container-fluid">
        <MainSection data={this.state.data}/>
        <AboutSection data={this.state.data}/>
        <Portfolio data={this.state.data}/>
        <Contact data={this.state.data}/>
        <Footer data={this.state.data}/>
      </div>
    )
  }
}

export default PortfolioEng;
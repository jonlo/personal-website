import './App.css';
import React, { Component } from 'react';
import { Header } from './header';
import { About } from './about';

import { Experience } from './experience';

import resume from '../data/resume.json';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { visiblePanel: 'About' };
    this.setPanel = this.setPanel.bind(this)
  }

  setPanel(panel) {
    this.setState({ visiblePanel: panel });
  }

  render() {
    return (
      <div className="App">
        <Header resume={resume} setPanel={this.setPanel}></Header>
        <About visible={this.state.visiblePanel === 'About' ? true : false} resume={resume} ></About>
        <Experience visible={this.state.visiblePanel === 'Experience' ? true : false} experience={resume.experience} ></Experience>

      </div >
    );
  }


}



export default App;

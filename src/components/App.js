import './App.css';
import React, { Component } from 'react';
import { Header } from './header';
import { About } from './about';

import { Experience } from './experience';

import resume from '../data/resume.json';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { imageFile: '' };
    this.handler = this.handler.bind(this)
    this.imageViewer = React.createRef();
    console.log(resume.experience);
  }

  handler(imageFile) {
    this.imageViewer.current.setImage(imageFile);
  }

  render() {
    return (
      <div className="App">
        <Header resume={resume}></Header>
        <About resume={resume}></About>
        <Experience experience={resume.experience}></Experience>

      </div >
    );
  }


}



export default App;

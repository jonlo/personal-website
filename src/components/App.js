import './App.css';
import React, { Component } from 'react';
import { Header } from './header';
import { About } from './about';
import { Skills } from './skills';
import resume from '../data/resume.json';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = { imageFile: '' };
    this.handler = this.handler.bind(this)
    this.imageViewer = React.createRef();
  }

  handler(imageFile) {
    this.imageViewer.current.setImage(imageFile);
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <About></About>
        <Skills skills={resume.skills} ></Skills>
      </div >
    );
  }


}



export default App;

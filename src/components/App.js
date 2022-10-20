import './App.css';
import React, { Component } from 'react';
import { Header } from './header/header';
import { About } from './about/about';
import { Experience } from './experience/experience';
import resume from '../data/resume.json';
import ReactGA from 'react-ga';
import store from '../redux/store';
import { Provider } from 'react-redux'

ReactGA.initialize('UA-246059601-1');
ReactGA.pageview(window.location.pathname + window.location.search);


export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header resume={resume} ></Header>
          <About resume={resume} ></About>
          <Experience experience={resume.experience} ></Experience>
        </div >
      </Provider>
    );
  }

}



export default App;

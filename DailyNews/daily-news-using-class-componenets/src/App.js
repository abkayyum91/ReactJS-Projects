import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsArea from './components/NewsArea';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize = 9;
  country = "in"

  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <>
        <Router>
        <LoadingBar color='#2acaea' progress={this.state.progress} height={4}/>
          <Navbar />
          <Switch>
            <Route exact path="/"><NewsArea setProgress={this.setProgress} key=" general" title="Trending News on Daily News" pageSize={this.pagSize} country={this.country} category="general" /></Route>
            <Route exact path="/business"><NewsArea setProgress={this.setProgress} key=" business" title="Trending News in business" pageSize={this.pagSize} country={this.country} category="business" /></Route>
            <Route exact path="/entertainment"><NewsArea setProgress={this.setProgress} key=" entertainment" title="Trending News in entertainment" pageSize={this.pagSize} country={this.country} category="entertainment" /></Route>
            <Route exact path="/health"><NewsArea setProgress={this.setProgress} key=" health" title="Trending News in health" pageSize={this.pagSize} country={this.country} category="health" /></Route>
            <Route exact path="/science"><NewsArea setProgress={this.setProgress} key=" science" title="Trending News in science" pageSize={this.pagSize} country={this.country} category="science" /></Route>
            <Route exact path="/sports"><NewsArea setProgress={this.setProgress} key=" sports" title="Trending News in sports" pageSize={this.pagSize} country={this.country} category="sports" /></Route>
            <Route exact path="/technology"><NewsArea setProgress={this.setProgress} key=" technology" title="Trending News in technology" pageSize={this.pagSize} country={this.country} category="technology" /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

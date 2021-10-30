import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import NewsArea from './components/NewsArea';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const pageSize = 9;
  const country = "in"
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <LoadingBar color='#f11946' progress={progress} height={4} />
        <Navbar />
        <Switch>
          <Route exact path="/"><NewsArea setProgress={setProgress} apiKey={apiKey} key="general" title="Trending News on Daily News" pageSize={pageSize} country={country} category="general" /></Route>
          <Route exact path="/business"><NewsArea setProgress={setProgress} apiKey={apiKey} key="business" title="Trending News in business" pageSize={pageSize} country={country} category="business" /></Route>
          <Route exact path="/entertainment"><NewsArea setProgress={setProgress} apiKey={apiKey} key="entertainment" title="Trending News in entertainment" pageSize={pageSize} country={country} category="entertainment" /></Route>
          <Route exact path="/health"><NewsArea setProgress={setProgress} apiKey={apiKey} key="health" title="Trending News in health" pageSize={pageSize} country={country} category="health" /></Route>
          <Route exact path="/science"><NewsArea setProgress={setProgress} apiKey={apiKey} key="science" title="Trending News in science" pageSize={pageSize} country={country} category="science" /></Route>
          <Route exact path="/sports"><NewsArea setProgress={setProgress} apiKey={apiKey} key="sports" title="Trending News in sports" pageSize={pageSize} country={country} category="sports" /></Route>
          <Route exact path="/technology"><NewsArea setProgress={setProgress} apiKey={apiKey} key="technology" title="Trending News in technology" pageSize={pageSize} country={country} category="technology" /></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
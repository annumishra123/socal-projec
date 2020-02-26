import React, { Component } from 'react';
import {ReactTinyLink} from 'react-tiny-link';
import './App.css';

class App extends Component {

  render() {
    return(
      < div className="App">
      <h3>Data... ...</h3>
      <ReactTinyLink 
        cardSize="small"
        showGraphic={true}
        maxLine={10}
        minLine={1}
        url="https://medium.com/better-programming/creating-a-simple-app-with-react-js-f6aa88998952"
      />
      <h3>Data... ...</h3>
      <ReactTinyLink
        cardSize="large"
        showGraphic={true}
        maxLine={5}
        minLine={1}
        url="https://www.hindustantimes.com/delhi-news/17-dead-in-delhi-violence-as-amit-shah-ajit-doval-chair-emergency-meetings/story-rqtBfiDfJGTezaFLLyZs6M.html"
      />
    </div>
    );
  }
}

export default App;



import React from 'react';
import logo from './logo.svg';
import './App.css';
import Unsplash, { toJson } from "unsplash-js";
import $ from 'jquery';

function App() {

    const fetch = require('node-fetch');
    global.fetch = fetch;
    let clientId = "2a1120b968b317bb1d590468bfda81a6584cc506329f39222f2698a19d189ac0";
    let url = "https://api.unsplash.com/photos/?client_id=" + clientId;
    fetch(url)

    .then((response) => {
      return response.json();
    })
    .then((myJson) => {

      myJson.forEach(photo => {
        console.log(photo)
        let result = `<img src=${photo.urls.regular}/>`;
        $("#result").append(result);
      });
    });

    return (

      <div className="App" id="result">
      </div>
    );
}

export default App;

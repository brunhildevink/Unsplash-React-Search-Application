import React, { Component } from "react";
import ReactDOM from "react-dom";


class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const clientId = "2a1120b968b317bb1d590468bfda81a6584cc506329f39222f2698a19d189ac0";
    const url = "https://api.unsplash.com/photos/?client_id=" + clientId;
    const response = await fetch(url)
    const json = await response.json();
    const result = json.map(photo => photo.urls.regular)
    this.setState({ data: result })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(url => (
            <img src={url} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
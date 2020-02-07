import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
    const result = json.map(photo => photo.urls.thumb)
    this.setState({ data: result })
  }



  render() {
    return (
      <Container>

        <h1>React test!</h1>

        <form>
          <input placeholder="Search photos..." id="searchInput"></input>
          <button id="searchButton">Search</button>
        </form>

        <Row>
          {this.state.data.map((url, key) => (
            <Col md={4} key={key}><a href="#"><img src={url} /></a></Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
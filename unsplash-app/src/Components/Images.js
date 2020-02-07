import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Images extends Component {
  
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { data: [] };
  }

  handleSearch(event) {
    var search = this.setState({value: event.target.value});
    return event.target.value;
  }

  handleSubmit(event) {
    event.preventDefault();
    const clientId = "2a1120b968b317bb1d590468bfda81a6584cc506329f39222f2698a19d189ac0";
    const url = 
        "https://api.unsplash.com/search/photos?client_id=" +
        clientId + 
        "&query=" + 
        this.state.value;
    this.getResult(url);
  }

  async getResult(props) {
    const url = props;
    const response = await fetch(url);
    const json = await response.json();
    const jsonResults = json.results;
    const result = jsonResults.map(photo => photo.urls.thumb);
    console.log(this.state)
    this.setState({ data: result });
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

        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleSearch} placeholder="Search photos..." id="searchInput" ></input>
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

export default Images;
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
    const result = jsonResults.map(photo => photo);
    this.setState({ data: result });
  }

  async componentDidMount() {
    const clientId = "2a1120b968b317bb1d590468bfda81a6584cc506329f39222f2698a19d189ac0";
    const url = "https://api.unsplash.com/photos/?client_id=" + clientId;
    const response = await fetch(url)
    const json = await response.json();
    const result = json.map(photo => photo)
    this.setState({ data: result })
  }
  
  render() {
    return (

      <Container className="container-fluid">
        <h1 className="title">Good day Yummygum!</h1>
        <Row>
          <Col>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleSearch} placeholder="Search photos..." id="searchInput" ></input>
            <button id="searchButton">Search</button>
            </form>
          </Col>
        </Row>


        <Row>
          {this.state.data.map((photo, key) => (
            <Col md={3} key={key} className="card_container">
              <a target="_blank" href={"https://unsplash.com/photos/" + photo.id}>
                <img src={photo.urls.small} />
                <div className="card_description" id={key} >
                  <h1 className="card_description_username">{photo.user.name}</h1>
                  <p>{photo.description}</p>
                  <p><strong>Publish date:</strong> {photo.created_at}</p>
                  <p><strong>Likes:</strong> {photo.likes}</p>
                  <p><strong>Dimensions:</strong> {photo.width} x {photo.height}</p>
                </div>
                </a>
            </Col>
          ))}
        </Row>

        <p className="footer_note">That's it Yummygum ❤️</p>

      </Container>
    );
  }
}

export default Images;
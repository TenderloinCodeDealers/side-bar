import React from 'react';
import axios from 'axios';  // import $ from 'jquery';
import PhotoCarousel from './PhotoCarousel.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // [TBD] Add more state(s) here
      product: {}

    }
  }

  // About method: get products data from server
  getProducts(id) {
    const context = this;

    // Note: use axios, for HTTP request, get
    axios.get(`/${id}/api/products`)  // axios.get('/:id/api/products')
    .then(function(response) {
      // console.log(JSON.stringify(response));  // For debugging
      context.setState({
        // [Todo] Add 'Option 2' later
        product: response.data[0]  // Product's 'Option 1' row
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  // Search for deal, by product ID
  handleSearch(value) {
    this.getProducts(value);
  }

  render(){
    return (
      <div>
        <div>
          <h3>Photo Carousel</h3>
          {/* Note: do not use the first line below (from React's tutorial) */}
          {/* <PhotoCarousel handleSearch={() => this.handleSearch.bind(this)} /> */}
          <PhotoCarousel handleSearch={this.handleSearch.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;


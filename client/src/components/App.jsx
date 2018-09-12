// [Todo] with CSS
// Move sidebar to the right of photo carousel

import React from 'react';
import axios from 'axios';  // import $ from 'jquery';

import SearchBar from './SearchBar.jsx';
import PhotoCarousel from './PhotoCarousel.jsx';
import SideBar from './SideBar.jsx';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      category: '',
      expirationTime: '',

      option1Price: '',
      option1Warranty: '',
      option2Price: '',
      option2Warranty: ''
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
        // product: response.data[0],  // Product's 'Option 1' row
        productName: response.data[0].product_name,
        category: response.data[0].category,
        expirationTime: response.data[0].expiration_time,

        option1Price: response.data[0].product_price,
        option1Warranty: response.data[0].warranty_cost,
        option2Price: response.data[1].product_price,
        option2Warranty: response.data[1].warranty_cost
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
          <h3>Search Bar</h3>
          {/* Note: do not use the first line below (from React's tutorial) */}
          {/* <SearchBar handleSearch={() => this.handleSearch.bind(this)} /> */}
          <SearchBar handleSearch={this.handleSearch.bind(this)} />
        </div>
        <br></br>
        <div>
          <h3>Photo Carousel</h3>
          <PhotoCarousel productName={this.state.productName} />
        </div>

        <div>
          <h3>SideBar</h3>
          <SideBar
            category={this.state.category}
            expirationTime={this.state.expirationTime}

            option1Price={this.state.option1Price}
            option1Warranty={this.state.option1Warranty}
            option2Price={this.state.option2Price}
            option2Warranty={this.state.option2Warranty}
          />
        </div>
      </div>
    );
  }
}

export default App;


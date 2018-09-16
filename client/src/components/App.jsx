import React from 'react';

// Note: another option for HTTP method is to use ES6's built-in function, fetch()
import axios from 'axios';
// import $ from 'jquery';

import SearchBar from './other_components/SearchBar.jsx';
import PhotoCarousel from './other_components/PhotoCarousel.jsx';
import SideBar from './SideBar.jsx';

class App extends React.Component {
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
    };
  }

  // Note: added 'this.getProducts(id)' to component lifecycle, that 'http://localhost:3004/' only displays the page when there is a 'id' at the end
  componentDidMount() {
    const url = window.location.href.replace(/^(?:\/\/|[^/]+)*\//, '');
    const id = url.substring(0, url.indexOf('/'));
    this.getProducts(id);
  }

  // About method: get products data from server
  getProducts(id) {
    const context = this;

    // Note: use axios, for HTTP request, get
    axios
      .get(`/${id}/api/products`) // ES6's template literal
      .then(function(response) {
        // console.log(JSON.stringify(response)); // For debugging
        context.setState({
          // product: response.data[0], // Product's 'Option 1' row
          productName: response.data[0].product_name,
          category: response.data[0].category,
          expirationTime: response.data[0].expiration_time,

          option1Price: response.data[0].product_price,
          option1Warranty: response.data[0].warranty_cost,
          option2Price: response.data[1].product_price,
          option2Warranty: response.data[1].warranty_cost
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  // Search for deal, by product
  // Note: search by ID is optional now, because 'getProducts(id)' is also added to component lifecycle
  handleSearch(value) {
    this.getProducts(value);
  }

  render() {
    return (
      // Note: need to use "wrapper" as the className
      <div className="wrapper">
        <div className="rowDivider">
          <h3>Welcome to Vourcher!</h3>
        </div>
        <div className="rowDivider">
          <br />
        </div>

        <div className="rowDivider">
          {/* Note: do not use the first line below (from React's tutorial) */}
          {/* <SearchBar handleSearch={() => this.handleSearch.bind(this)} /> */}
          <SearchBar handleSearch={this.handleSearch.bind(this)} />
          <br />
          <br />
        </div>

        <div className="rowDivider">
          <br />
        </div>

        <div className="columnDivider">
          <PhotoCarousel productName={this.state.productName} />
        </div>

        <div>
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

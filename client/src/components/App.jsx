// [Todo] Add a React form (as another component), for side-bar section
// https://codepen.io/gaearon/pen/VmmPgp?editors=0010

import React from 'react';

// import $ from 'jquery';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // [Todo] Finish this
      product: {}
      // category: ''

    }
  }

  componentDidMount() {
    // [Todo] Make id dynamic later, by adding selection to front end
    this.getProducts(60);
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

  render(){
    return (
      <div>
        Hi, App.jsx
      </div>
    );
  }
}

export default App;


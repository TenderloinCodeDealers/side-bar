import React from 'react';

class PhotoCarousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submittedValue: 0
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Submitted product ID');
    // [TBD] Not sure to use 'const' or 'let' here
    const intValue = parseInt(this.state.value);  // Convert value from type string to type number
    this.setState({
      submittedValue: intValue
    });
    this.props.handleSearch(this.state.value);  // Note: no need to convert to number; string works here
    event.preventDefault();
  }

  render(){
    let productInfo;
    if (this.state.submittedValue >= 1 && this.state.submittedValue <=100) {  // If with valid value for product ID
      // productInfo = <h5>Found product</h5>;
      productInfo = <FoundProduct />;
    } 

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Enter product ID (between 1 and 100): 
            <input type ="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
      
        <div>
          {productInfo}
        </div>
      </div>
    );
  }
}


// A new component, per conditional rendering
function FoundProduct(props) {
  return (
    <p>Found product</p>
  );
}



export default PhotoCarousel;
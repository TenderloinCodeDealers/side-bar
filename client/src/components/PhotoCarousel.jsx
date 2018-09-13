import React from 'react';

class PhotoCarousel extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // Note: no state for PhotoCarousel, as for my service repo
    }
  }


  render(){
    let productInfo;

    // Note: 'productInfo' needs to be a React component, to be returned
    if (this.props.productName) {
      productInfo = <FoundProduct productName={this.props.productName} />;  // productInfo = <h5>Found product</h5>;
    } else {
      productInfo = <NotFoundProduct />;
    }

    return (
      <div>
        <h3>Photo Carousel</h3>
        {productInfo}
      </div>
    );
  }
}


// A new component, per conditional rendering
function FoundProduct(props) {
  return (
    <p>Product name: {props.productName}</p>
  );
}
// Another new component, per conditional rendering
function NotFoundProduct(props) {
  return (
    <p>Product is not found!</p>
    // alert('Product is not found!')  // alert does not work well here
  );
}

export default PhotoCarousel;


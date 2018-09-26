// [TBD] Update DB: postpone expiration time by 1 week (or 2)
// Note: not working with semantic (for UI components): Dropdown (for optoins); Button; Rating

import React from 'react';
import styled from 'styled-components'; // CSS: styled components
import RadioOptions from './RadioOptions.jsx';
import { BoxOptions } from './BoxOptions.jsx';

// UI: add time left, with better look
import TimeAgo from 'react-timeago';
// UI: add rating star
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

const WrapperTop = styled.section`
  display: grid;
  width: 300px;
  grid-template-columns: 150px 150px;
  border-bottom: 2px solid #d3d3d3;
`;
const WrapperBottom = styled.section`
  display: grid;
  height: 200px;
  width: 300px;
  grid-template-rows: 120px 30px;
  grid-row-gap: 50px;
`;
const BuyButton = styled.button`
  background-color: #4caf50;
  color: white;
`;
const JustifyRight = styled.section`
  justify-self: right;
`;

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(v) {
    // handleChange(event) {
    this.setState({
      value: v // value: event.target.value
    });
  }

  handleClick() {
    alert('Congrats! You just bought this product!');
  }

  render() {
    let options;
    if (this.props.category === 'Local') {
      options = (
        <RadioOptions
          value={this.state.value}
          option1Price={this.props.option1Price}
          option2Price={this.props.option2Price}
          handleChange={this.handleChange.bind(this)}
        />
      );
    } else if (this.props.category === 'Goods') {
      options = (
        <BoxOptions
          value={this.state.value}
          option1Price={this.props.option1Price}
          option2Price={this.props.option2Price}
          handleChange={this.handleChange.bind(this)}
          option1Warranty={this.props.option1Warranty}
          option2Warranty={this.props.option2Warranty}
        />
      );
    }

    // Note: need to set rating as an array, in order to add 5 stars to it
    let rating = []; // let rating;
    for (let i = 0; i < 5; i++) {
      // rating += <FontAwesomeIcon icon={faStar} color="gold" />;
      rating[i] = <FontAwesomeIcon icon={faStar} color="gold" />;
    }

    return (
      <div>
        <WrapperTop>
          <div>
            <span>Sales End: </span>
            <TimeAgo date={this.props.expirationTime} />
          </div>

          <JustifyRight>{rating}</JustifyRight>
        </WrapperTop>
        <WrapperBottom>
          <div>{options}</div>
          {/* <button onClick={this.handleClick}>Buy</button> */}
          <BuyButton onClick={this.handleClick}>Buy</BuyButton>
        </WrapperBottom>
      </div>
    );
  }
}

// export default SideBar;
// export { SideBar, RadioOptions, BoxOptions, Checkbox };
export { SideBar };

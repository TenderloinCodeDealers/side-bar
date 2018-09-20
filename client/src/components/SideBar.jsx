// [TBD] Update DB: postpone expiration time by 1 week (or 2)
// Note: CSS that is not working: AlignVertical (radio options)

import React from 'react';

// CSS: styled components
import styled from 'styled-components';

// UI: add time left, with better look
import TimeAgo from 'react-timeago';

// UI: add UI components with Semantic
// Note: not working with semantic: Dropdown (for optoins); Button; Rating
import { Form, Radio, Checkbox } from 'semantic-ui-react'; // For options: use semantic
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
const RadioWrapper = styled.section`
  display: grid;
  grid-template-rows: 15px 60px 50px;
  // grid-row-gap: 35px;
`;
const BoxWrapper = styled.section`
  display: grid;
  grid-template-rows: 15px 50px 20px;
  grid-row-gap: 35px;
`;
const JustifyRight = styled.section`
  justify-self: right;
`;
const FullWidthSelect = styled.select`
  width: 100%;
`;

const AlignVertical = styled.section`
  vertical-align: middle;
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

/*
	The 2 components below are added, per conditional rednering to side bar 
	- For category as 'Local', display radio buttons
	- For category as 'Goods', display dropdown box
*/

function RadioOptions(props) {
  let price1 = <span>Option 1's price: ${props.option1Price}</span>;
  let price2 = <span>Option 2's price: ${props.option2Price}</span>;
  return (
    <Form>
      <RadioWrapper>
        <div />
        <Form.Field>
          {/* <AlignVertical> */}
          <Radio
            label={price1}
            name="radioGroup"
            value="option1"
            checked={props.value === 'option1'}
            onChange={event => props.handleChange(event.target.value)}
          />
          {/* </AlignVertical> */}
        </Form.Field>
        <Form.Field>
          <Radio
            label={price2}
            name="radioGroup"
            value="option2"
            checked={props.value === 'option2'}
            onChange={event => props.handleChange(event.target.value)}
          />
        </Form.Field>
      </RadioWrapper>
    </Form>
  );
}

// Note: use React's drop-down feature
function BoxOptions(props) {
  let price;
  let warranty;
  let warrantyLabel;

  if (props.value === 'option2') {
    price = <p>Price: ${props.option2Price}</p>;
    warrantyLabel = <span>Add warranty for option 2 at ${props.option2Warranty}</span>;
    warranty = <Checkbox label={warrantyLabel} />;
  } else {
    // Note: option 1 is the default option
    price = <p>Price: ${props.option1Price}</p>;
    warrantyLabel = <span>Add warranty for option 1 at ${props.option1Warranty}</span>;
    warranty = <Checkbox label={warrantyLabel} />;
  }

  return (
    <div>
      <BoxWrapper>
        <div>{price}</div>

        <div>
          <form>
            {/* <select onChange={event => props.handleChange(event.target.value)}> */}
            <FullWidthSelect onChange={event => props.handleChange(event.target.value)}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              {/* </select> */}
            </FullWidthSelect>
          </form>
        </div>

        <div>{warranty}</div>
      </BoxWrapper>
    </div>
  );
}

// export default SideBar;
export { SideBar, RadioOptions, BoxOptions, Checkbox };

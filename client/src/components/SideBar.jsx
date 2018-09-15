import React from 'react';

// Working with semantic: Form and Radio for options; Checkbox for adding warranty (goods category only)
import { Form, Radio, Checkbox } from 'semantic-ui-react'; // For options: use semantic

// For adding rating star
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

// Not working with semantic: Dropdown (for optoins); Button; Rating

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
        <h3>Side Bar</h3>

        {/* <FontAwesomeIcon icon={faStar} color="gold" /> */}
        {rating}

        <p>Product Category: {this.props.category}</p>
        <p>Expiration time: {this.props.expirationTime}</p>

        {options}

        <br />
        <button onClick={this.handleClick}>Buy</button>
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
      {/* <p>Option 1's price: ${this.props.option1Price}</p> */}
      <Form.Field>
        <Radio
          // label='Option 1 costs ${this.props.option1Price}'
          label={price1}
          name="radioGroup"
          value="option1"
          // checked={this.state.value === 'option1'}
          // onChange={this.handleChange.bind(this)}
          checked={props.value === 'option1'}
          onChange={event => props.handleChange(event.target.value)}
        />
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
    </Form>
  );
}

// Note: use React's drop-down feature
function BoxOptions(props) {
  let price;
  let warranty;
  let warrantyLabel;

  if (props.value === 'option2') {
    price = <p>Option 2's price: ${props.option2Price}</p>;
    warrantyLabel = <span>Add warranty for option 2 at ${props.option2Warranty}</span>;
    warranty = <Checkbox label={warrantyLabel} />;
  } else {
    // Note: option 1 is the default option
    price = <p>Option 1's price: ${props.option1Price}</p>;
    warrantyLabel = <span>Add warranty for option 1 at ${props.option1Warranty}</span>;
    warranty = <Checkbox label={warrantyLabel} />;
  }

  return (
    <div>
      {price}

      <label>
        Select your option:
        <form>
          <select onChange={event => props.handleChange(event.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </form>
      </label>

      <br />
      {warranty}
    </div>
  );
}

export default SideBar;

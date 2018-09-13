// [Todo] with CSS
// For sidebar: add features: (1) radio buttons for Local (2) dropdown box for Goods (with conditional rendering)

import React from 'react';
import { Form, Radio } from 'semantic-ui-react';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // [TBD] Fill this in
      value: ''
    };
  }

  render() {
    let price1 = <span>Option 1's price: ${this.props.option1Price}</span>;
    let price2 = <span>Option 2's price: ${this.props.option2Price}</span>;

    return (
      <div>
        <h3>Side Bar</h3>
        <p>Expiration time: {this.props.expirationTime}</p>

        <Form>
          {/* <p>Option 1's price: ${this.props.option1Price}</p> */}
          <Form.Field>
            <Radio
              // label='Option 1 costs ${this.props.option1Price}'
              label={price1}
              name='radioGroup'
            />
          </Form.Field>

          {/* <p>Option 2's price: ${this.props.option2Price}</p> */}
          <Form.Field>
            <Radio
              label={price2}
              name='radioGroup'
            />
          </Form.Field>
        </Form>

        {/* Buy button */}
        <br></br>
        <button>Buy</button>
      </div>
    );
  }

}

export default SideBar;

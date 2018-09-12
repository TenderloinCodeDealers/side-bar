// [Todo] with CSS
// For sidebar: add features: (1) radio buttons for Local (2) dropdown box for Goods (with conditional rendering)

import React from 'react';

class SideBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      // [TBD] Fill this in

    }
  }

  render() {
    return (
      <div>
        <p>Expiration time: {this.props.expirationTime}</p>

        {/* Option 1 */}
        <p>Option 1's price: ${this.props.option1Price}</p>
        {/* Option 2 */}
        <p>Option 2's price: ${this.props.option2Price}</p>

        {/* Buy button */}
        <button>Buy</button>
      </div>
    )
  }

}

export default SideBar;

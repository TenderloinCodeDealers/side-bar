// About: for category as 'Goods', display dropdown box (conditional rendering)

import React from 'react';
import styled from 'styled-components';

// UI: add UI components with Semantic
import { Form, Radio, Checkbox } from 'semantic-ui-react'; // For options: use semantic

const BoxWrapper = styled.section`
  display: grid;
  grid-template-rows: 15px 50px 20px;
  grid-row-gap: 35px;
`;
const FullWidthSelect = styled.select`
  width: 100%;
`;

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

// export default BoxOptions;
export { BoxOptions, Checkbox };

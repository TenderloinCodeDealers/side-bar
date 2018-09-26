// About: for category as 'Local', display radio buttons (conditional rendering)
// Note: CSS that is not working: AlignVertical (radio options)

import React from 'react';
import styled from 'styled-components';

// UI: add UI components with Semantic
import { Form, Radio } from 'semantic-ui-react'; // For options: use semantic

const RadioWrapper = styled.section`
  display: grid;
  grid-template-rows: 15px 60px 50px;
  // grid-row-gap: 35px;
`;
// const AlignVertical = styled.section`
//   vertical-align: middle;
// `;

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

export default RadioOptions;

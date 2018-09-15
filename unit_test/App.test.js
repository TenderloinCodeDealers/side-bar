/*
  Way 1: test crashing, using ReactDOM
  Note: need to add file, .babelrc, for <App /> to work
  Link to doc: https://jest-bot.github.io/jest/docs/getting-started.html
*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../client/src/components/App.jsx';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });


/*
  Way 2: test crashing, using Enzyme
  Note: setupTests.js file does not work; so the first 3 lines are pasted for every test
*/

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme'; // Needs the adaptor from Enzyme
import App from '../client/src/components/App.jsx';
import 'jest-enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders the welcome message', () => {
  const wrapper = shallow(<App />);
  const words = <h3>Welcome to Vourcher!</h3>;
  expect(wrapper).toContainReact(words); // Syntax with 'jest-enzyme'
});





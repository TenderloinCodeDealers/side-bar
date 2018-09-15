import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme'; // Needs the adaptor from Enzyme
import SideBar from '../client/src/components/SideBar.jsx';
import 'jest-enzyme';


it('renders without crashing', () => {
  shallow(<SideBar />);
});


// Note: look to match only part of the paragraph
// Found syntax at doc, https://github.com/FormidableLabs/enzyme-matchers
it('renders the words, as selected', () => {
  const wrapper = shallow(<SideBar />);
  expect(wrapper).toIncludeText('Expiration');

  // Note: look to match the entire paragraph
  // const words = Expiration;
  // expect(wrapper).toContainReact(words); // Syntax with 'jest-enzyme'
});


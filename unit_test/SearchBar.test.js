import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme'; // Needs the adaptor from Enzyme
import SearchBar from '../client/src/components/SearchBar.jsx';
import 'jest-enzyme';

it('renders without crashing', () => {
  shallow(<SearchBar />);
});


// Test area 2: test if the form works, for searching for product ID
// Improvement (per Vik): use a variable to store shallow-rendered React component
describe('Search Form', () => {
  const searchBar = shallow(<SearchBar />); // Improvement

  it('should render form without throwing an error', () => {
    // expect(shallow(<SearchBar />).find('form').exists()).toBe(true);
    expect(searchBar.find('form').exists()).toBe(true);
  });
  
  it('form should render product ID input', () => {
    // expect(shallow(<SearchBar />).find('#productID').exists()).toBe(true);
    expect(searchBar.find('#productID').exists()).toBe(true);
  })
});


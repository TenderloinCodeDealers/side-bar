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

// Syntax doc: https://github.com/FormidableLabs/enzyme-matchers

describe('More tests on Side Bar', () => {
  const wrapper = shallow(<SideBar />);

  // Note: look to match only part of the paragraph
  it('should render the word, Expiration', () => {
    expect(wrapper).toIncludeText('Expiration');
    // expect(wrapper).toContainReact('Expiration'); // Note: look to match the entire paragraph
  });

  it('should render buy button', () => {
    expect(wrapper.find('button')).toMatchElement(<button>Buy</button>);
  });
});

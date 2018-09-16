import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow, mount } from 'enzyme'; // Needs the adaptor from Enzyme
// import SideBar from '../client/src/components/SideBar.jsx';
import { SideBar, RadioOptions, BoxOptions, Checkbox } from '../client/src/components/SideBar.jsx';
import 'jest-enzyme';

it('renders without crashing', () => {
  shallow(<SideBar />);
});

// Syntax doc: https://github.com/FormidableLabs/enzyme-matchers
describe('More tests on Side Bar', () => {
  const wrapper1 = shallow(<SideBar />);
  const wrapper2 = mount(<SideBar />); // For testing conditional rendering

  // Note: look to match only part of the paragraph
  it('should render the word, Expiration', () => {
    expect(wrapper1).toIncludeText('Expiration');
    // expect(wrapper1).toContainReact('Expiration'); // Note: look to match the entire paragraph
  });

  it('should render buy button', () => {
    expect(wrapper1.find('button')).toMatchElement(<button>Buy</button>);
  });

  it('should render options, based on product category', () => {
    wrapper2.setProps({ category: 'Goods' });
    wrapper2.update();
    // expect(wrapper2).toContainReact(<RadioOptions />);
    expect(wrapper2.find(BoxOptions)).toHaveProp('option1Price');
  });

  // Note: this test does not improve Jest's test coverage
  it('should render warranty checkbox, for category Goods', () => {
    wrapper2.setProps({ category: 'Goods' });
    wrapper2.update();
    expect(wrapper2.find(Checkbox)).not.toBeChecked();
  });

  // Note: this method changes value, but the value does not pass to prop
  it('handleChange() method should change value, per dropdown box', () => {
    const mockFn = jest.fn(); // Jest's built-in mock function
    const input = mount(<BoxOptions handleChange={mockFn} value="" />);
    input.find('select').simulate('change', { target: { value: 'option2' } });
    expect(mockFn.mock.calls[0][0]).toBe('option2'); // Jest's syntax

    // Note: to pass value to prop, will need to add more to the mockFn
    // expect(input).toHaveProp('value', 'option2');
  });
});

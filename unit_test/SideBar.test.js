import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme'; // Needs the adaptor from Enzyme
import SideBar from '../client/src/components/SideBar.jsx';
import 'jest-enzyme';

it('renders without crashing', () => {
  shallow(<SideBar />);
});

// [Todo] Figure out how to test for part of <p></p> (e.g. just 'Expiration'), in addition to the entire <p></p>
// it('renders the words, as selected', () => {
//   const wrapper = shallow(<SideBar />);
//   const words = <p>Expiration</p>
//   expect(wrapper).toContainReact(words); // Syntax with 'jest-enzyme'
// });


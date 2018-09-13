import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme'; // Needs the adaptor from Enzyme
import PhotoCarousel from '../client/src/components/PhotoCarousel.jsx';
import 'jest-enzyme';

it('renders without crashing', () => {
  shallow(<PhotoCarousel />);
});


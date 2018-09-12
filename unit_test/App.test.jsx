import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

// [Todo] Understand configure(...) API better
Enzyme.configure({ adapter: new Adapter() });


import { shallow, mount, render } from 'enzyme';
import App from '../App';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots : jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
});

test('renders MainPage without crashing', () => {
    expect(shallow(<App />)).toMatchSnapshot();
})

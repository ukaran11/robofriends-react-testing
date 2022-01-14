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

test('expect to render App Component', () => {
    expect(shallow(<App />)).toMatchSnapshot();
})

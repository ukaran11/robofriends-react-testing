import { shallow, mount, render } from 'enzyme';
import App from '../App';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots : jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
});

test('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

test('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots : jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }]);
})

test('filters robots correctly 2', () => {
    const mockProps3 = {
        onRequestRobots : jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})

test('filters robots correctly 2 with pending set to true', () => {
    const mockProps3 = {
        onRequestRobots : jest.fn(),
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: true
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots);
})
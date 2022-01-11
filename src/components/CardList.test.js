import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';

const mockRobots = [
    {
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@gmail.com'
    }
]

test('expect to render Card Component', () => {
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})

import { shallow, mount, render } from 'enzyme';
import Card from './Card';

test('expect to render Card Component', () => {
    expect(shallow(<Card />).length).toEqual(1);
})

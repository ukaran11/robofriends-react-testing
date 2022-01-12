import { shallow, mount, render } from 'enzyme';
import App from '../App';


test('expect to render App Component', () => {
    expect(shallow(<App />)).toMatchSnapshot();
})

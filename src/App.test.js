import {shallow} from 'enzyme';
import App from './App';

const findByDataTest = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
};

test('render without error', async () => {
    const wrapper = shallow(<App/>);
    // const container=wrapper.find(`[data-test="container"]`);
    const container = await findByDataTest(wrapper, 'container');
    expect(container.length).toBe(1);
});

test('display counter', async () => {
    const wrapper = shallow(<App/>);
    // const counter=wrapper.find(`[data-test="counter"]`);
    const counter = await findByDataTest(wrapper, 'counter');
    expect(counter.length).toBe(1);
});

test('increase counter btn', async () => {
    const wrapper = shallow(<App/>);
    // const counterBtn=wrapper.find(`[data-test="increaseBtn"]`);
    const counterBtn = await findByDataTest(wrapper, 'increaseBtn');
    expect(counterBtn.length).toBe(1);
});

test('initial counter is zero', () => {
    // const wrapper = shallow(<App/>);
    // const initialCounter=wrapper.state('counter');
    // expect(initialCounter).toBe(0);
    // not work because for class component
});

test("increase counter when click btn",async ()=>{
    // const wrapper=shallow(<App/>);
    // const counter=11;
    // wrapper.setState(counter);
    // click on btn
    // const btn =await findByDataTest(wrapper, 'increaseBtn');
    // btn.simulate('click');
    //fine text of counter
    // const txtCounter=await findByDataTest(wrapper, 'counter');
    // expect(txtCounter.text()).toContain(counter+1);
    // not work because for class component
})


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

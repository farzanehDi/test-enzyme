import '@testing-library/jest-dom/extend-expect'
import {mount} from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import Input from "../index";
import {findByDataTest} from "../../../utils/test";

const mockStore = configureMockStore([thunk]);

const setupWrapper = (store) => {
    const wrapper = mount(
        <Provider store={store}>
            <Input/>
        </Provider>
    );
    return wrapper;
};

describe('render with secrete word not guessed', () => {

    const store = mockStore({auth: {SUCCESS_GUESS: false}});
    let wrapper;
    beforeEach(() => {
        wrapper = setupWrapper(store);
    });

    test('render input', async () => {
        const input = await findByDataTest(wrapper, 'input');
        expect(input.length).toBe(1);
    })
    test('render submit error', async () => {
        const btn = await findByDataTest(wrapper, 'submitBtn');
        expect(btn.length).toBe(1);
    })
})

describe('render with secrete word to be guessed', () => {

    const store = mockStore({auth: {SUCCESS_GUESS: true}});
    let wrapper;
    beforeEach(() => {
        wrapper = setupWrapper(store);
    });

    test('not render input box', async () => {
        const input = await findByDataTest(wrapper, 'input');
        expect(input.length).toBe(0);
    });
    test('not render submit error', async () => {
        const btn = await findByDataTest(wrapper, 'submitBtn');
        expect(btn.length).toBe(0);
    })
})




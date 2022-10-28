import moxios from 'moxios';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {getRandomWordAction} from "./getRandomWord";


const mockStore = configureMockStore([thunk]);

describe('get secrete word random',()=>{
    beforeEach(()=>{
        moxios.install();
    })
    afterEach(()=>{
        moxios.uninstall();
    })
    test('add response word to state',async ()=>{
        const secreteWord='party';
        const initialState = {
            GUESSED_WORDS: [],
            SECRETE_WORD: secreteWord
        }
        const store =await mockStore({auth: {...initialState}});
        await moxios.wait(async ()=>{
            let request=await moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response:secreteWord
            })
        })

        await store.dispatch(getRandomWordAction());
        const newState=store.getState().auth;
        expect(newState.SECRETE_WORD).toBe(secreteWord)
        // expect(actions[0].payload).not.toBe('')

    })
})
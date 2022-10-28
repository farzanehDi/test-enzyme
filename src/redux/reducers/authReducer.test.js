import authReducer from "./authReducer";
import {reduxTypes} from "../types";

describe('test reducer', () => {

    const initialState = {
        SUCCESS_GUESS: false,
    };

    test('if empty action', () => {
        const reducer = authReducer(initialState, {});
        expect(reducer).toEqual({...initialState});
    })
    test('if true action', () => {
        const reducer = authReducer(initialState, {type:reduxTypes.SUCCESS_GUESS,payload:true});
        expect(reducer).toEqual({SUCCESS_GUESS: true});
    })
})

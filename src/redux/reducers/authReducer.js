import {reduxTypes} from '../types';

const initialState = {
    SUCCESS_GUESS: false,
    GUESSED_WORDS: [],
    SECRETE_WORD:'',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case reduxTypes.SUCCESS_GUESS:
            return {...state, SUCCESS_GUESS: action.payload};
        case reduxTypes.GUESSED_WORDS:
            return {...state, GUESSED_WORDS: action.payload};
        case reduxTypes.SECRETE_WORD:
            return {...state, SECRETE_WORD: action.payload};

        default:
            return state;

    }
}

export default authReducer;
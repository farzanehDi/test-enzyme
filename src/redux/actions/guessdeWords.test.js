import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {guessedWordsAction} from "./guessedWords";
import {reduxTypes} from "../types";

const mockStore = configureMockStore([thunk]);

describe('no guessed word yet', () => {

    const secreteWord = 'party';

    test('unsuccessful guess', async () => {
        const initialState = {
            GUESSED_WORDS: [],
            SECRETE_WORD: secreteWord
        }
        const store = mockStore({auth: {...initialState}});
        const unsuccessfulGuessedWord = 'train';
        store.dispatch(guessedWordsAction(unsuccessfulGuessedWord));
        const actions1 = store.getActions();
        const expectedActions = [{
            type: reduxTypes.GUESSED_WORDS,
            payload: [{word: unsuccessfulGuessedWord, matchCount: 3}]
        }]
        expect(actions1).toEqual(expectedActions);
    })
    test('successful guess', async () => {
        const initialState = {
            GUESSED_WORDS: [],
            SECRETE_WORD: secreteWord
        }
        const store = mockStore({auth: {...initialState}});
        const successfulGuessedWord = 'party';
        store.dispatch(guessedWordsAction(successfulGuessedWord));
        const actions = store.getActions();
        const expectedActions = [{
            type: reduxTypes.GUESSED_WORDS,
            payload: [{word: successfulGuessedWord, matchCount: 5}]
        }, {
            type: reduxTypes.SUCCESS_GUESS,
            payload: true
        }]
        expect(actions).toEqual(expectedActions);
    })
})

describe('guessed word', () => {

    const secreteWord = 'party';
    test('unsuccessful guess', async () => {
        const initialState = {
            GUESSED_WORDS: [{word: 'apple', matchCount: 2}],
            SECRETE_WORD: secreteWord
        }
        const store = mockStore({auth: {...initialState}});
        const unsuccessfulGuessedWord = 'train';
        await store.dispatch(guessedWordsAction(unsuccessfulGuessedWord));
        const actions = store.getActions();
        const expectedActions = [{
            type: reduxTypes.GUESSED_WORDS,
            payload: [{word: 'apple', matchCount: 2}, {word: unsuccessfulGuessedWord, matchCount: 3}]
        }]
        expect(actions).toEqual(expectedActions);
    });
    test('successful guess', async () => {
        const initialState = {
            GUESSED_WORDS: [{word: 'apple', matchCount: 2}],
            SECRETE_WORD: secreteWord
        }
        const store = mockStore({auth: {...initialState}});
        const successfulGuessedWord = 'party';
        await store.dispatch(guessedWordsAction(successfulGuessedWord));
        const actions = store.getActions();
        const expectedActions = [{
            type: reduxTypes.GUESSED_WORDS,
            payload: [{word: 'apple', matchCount: 2}, {word: successfulGuessedWord, matchCount: 5}]
        }, {
            type: reduxTypes.SUCCESS_GUESS,
            payload: true
        }]
        expect(actions).toEqual(expectedActions);
    })
})
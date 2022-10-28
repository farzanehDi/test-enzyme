import successGuessAction from "./successGuess";
import {reduxTypes} from "../types";

describe('action of success guess', () => {
    test('return action with type', () => {
        const action = successGuessAction();
        expect(action).toEqual({type:reduxTypes.SUCCESS_GUESS})
    })
})
import {reduxTypes} from "../types";
import {calMatchedWord} from "../../utils/helper";

export const guessedWordsAction = (guessedWord) => {

    return (dispatch, getState) => {
        const secreteWord = getState().auth.SECRETE_WORD;
        const matchCount = calMatchedWord(guessedWord, secreteWord);
        const guessedWords = getState().auth.GUESSED_WORDS;
        const newGuess = {word: guessedWord, matchCount};
        guessedWords.push(newGuess);

        dispatch({
            type: reduxTypes.GUESSED_WORDS,
            payload:guessedWords
        })

        if (guessedWord === secreteWord) {
            dispatch({
                type: reduxTypes.SUCCESS_GUESS,
                payload: true
            })
        }

    }

};
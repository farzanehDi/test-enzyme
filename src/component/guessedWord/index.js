import React from 'react';
import PropTypes from "prop-types";

const GuessedWord = (props) => {


    return (
        <div data-test={'container-guessed-words'}>

            {
                (!props.guessedWords || props.guessedWords.length === 0) && <p data-test={'info'}>please guess a word</p>
            }
            {
                props.guessedWords && props.guessedWords.map((item,index)=>(

                        <div key={index} data-test={'wordItem'}>{item.word} : {item.matchCount}</div>

                ))
            }

        </div>
    );
};

GuessedWord.prototype = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            matchCount: PropTypes.number.isRequired
        })
    )
}
export default GuessedWord;
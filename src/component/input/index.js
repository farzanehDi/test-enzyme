import React from 'react';
import {useSelector} from "react-redux";


const Input = () => {

    const successGuess=useSelector(state=>state.auth.SUCCESS_GUESS);

    return (
        <>
            {
                !successGuess &&
                <>
                    <input data-test={'input'} type={'text'}/>
                    <button data-test={'submitBtn'}>submit</button>
                </>

            }

        </>
    );
};

export default Input;
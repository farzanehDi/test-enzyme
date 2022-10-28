import {reduxTypes} from "../types";

const successGuessAction=(payload)=>{
    return {
        type:reduxTypes.SUCCESS_GUESS,
        payload
    }
}

export default successGuessAction;


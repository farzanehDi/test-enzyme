import {reduxTypes} from "../types";
import axios from "axios";


export const getRandomWordAction = () => {

    return async (dispatch) => {
        const res=await axios('https://api.api-ninjas.com/v1/randomword');
        dispatch({
            type:reduxTypes.SECRETE_WORD,
            payload:res.data.word
        })

    }

};
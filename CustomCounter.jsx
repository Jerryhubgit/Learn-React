/*


    useStateCustom(intialValue){
        const reducer = (state, action) => {
            default: 
                state
        }
        [state, dispatch] = useReducer(reducer, initialValue)

        return [state, setState]
    }


    
*/

import { useReducer } from 'react'

const useStateCustom = (initialValue) => {
    
    const setState = (state) => {
        return newState
    }
    return [state, setState]
}

export const CustomerCounter = () => {

}

/*
    function useStateCustom(initialValue) {
        const reducer = (state, action) => {
            return action;
        };

        const [state, dispatch] = useReducer(reducer, initialValue);

        const setState = (newValue) => {
            dispatch(newValue);
        };

        return [state, setState];
    }
*/
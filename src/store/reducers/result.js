import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            //or here can change data 
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.resultAct })
                //results: state.results.concat({ id: new Date(), value: action.resultAct * 3 })
                //have cases where you really want to change something before you store it in the state,
                //Can change it in the Reducer(better way because is about state) ex multiple value result * 3 as u can see it above or in Actions has another way example

                // concat returns a new array which is the older array plus the argument you add to concat - immutable way to update an array
                // and push manipulates the original value
            }
        case actionTypes.DELETE_RESULT:
            const updateArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                results: updateArray
            }
    }
    return state;
}

export default reducer;
import * as actionTypes from './actionTypes';

//Synchronous Functions action dispatch after 2s and may edit the store
export const saveResult = (res) => {
    //const updateResult = res * 2
    return {
        type: actionTypes.STORE_RESULT,
        resultAct: res
        //resultAct: updateResult
    };
};
//Example SetTimeout 
//Asynchronous Functions are only possible with Redux Thunk in the middleware
export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        }, 2000);
    };
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    };
};
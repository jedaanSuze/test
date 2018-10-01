import * as types from '../actions/actionTypes';
import initialState from './initialstate';


export default function commentReducer(state = initialState.data, action) {
    // state variable here reps just an array of courses
    switch (action.type) {
        case types.FETCH_TESTS:
            // console.log('reducers',action.payload.data);
            return action.payload;
        case types.ADD_TEST:
            // console.log('reducers',action.payload.data);
            return action.payload;
        default:
            return state;
    }
}

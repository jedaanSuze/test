import * as types from './actionTypes';


// the dispatch method via props.
// The dispatch method allows us to execute an action creator, perform logic, and ultimately update the global state object.
export const loadComment = () => async (dispatch, getState, api) => {
   /* const res = await CommentApi.getAllComment();
    dispatch({
        type: types.LOAD_COMMENT_SUCCESS,
        payload: res
    });*/
};

// the dispatch method via props.
// The dispatch method allows us to execute an action creator, perform logic, and ultimately update the global state object.
export const loveComment = (commentId) => async (dispatch, getState, api) => {
    /*const res = await CommentApi.loveCommentById(commentId);
    if (res) {
        dispatch({
            type: types.LOVE_COMMENT_SUCCESS,
            payload: res
        });
    } else {
        dispatch({
            type: types.LOVE_COMMENT_FAILED,
            payload: res
        });
    }*/
};

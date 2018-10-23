import * as types from '../actions/action-types';

const initialState = {
    seatchart: [],
    selSeats: false,
    selPick: false,
    selDrop: false,
    loader: false
};

const reducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_SEATCHART_SUCCESS:
            return Object.assign({}, state, {
                seatchart: action.data
            });
        case types.UPDATE_SEAT_SELECTED:
            return Object.assign({}, state, {
              selSeats: action.data
            });
        case types.RESET_SEATCHART:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
}

export default reducer;
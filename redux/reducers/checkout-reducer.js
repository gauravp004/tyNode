import * as types from '../actions/action-types';

const initialState = {
    data: [], // search API results ---- as is from API
    buses: [], // Bus data ---- to be used for sorting & filtering ---- can be reset based on data mentioned above
    loader: false
};

const reducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_CHECKOUT_SUCCESS:
            return Object.assign({}, state, {
                data: action.search,
                buses: action.search.Buses
            });
        default:
            return state;
    }
}

export default reducer;
import * as types from '../actions/action-types';

const initialState = {
    from: '',
    to: '',
    journeyDate: '',
    cityList: [],
    data: [], // search API results ---- as is from API
    buses: [], // Bus data ---- to be used for sorting & filtering ---- can be reset based on data mentioned above
    loader: false
};

const searchReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_CITY_LIST:
            return Object.assign({}, state, {
                cityList: action.data
            });
        case types.GET_SEARCH_PARAMS:
            return Object.assign({}, state, {
                from: action.from,
                to: action.to,
                journeyDate: action.journeyDate
            });
        case types.GET_SEARCH_SUCCESS:
            return Object.assign({}, state, {
                data: action.search,
                buses: action.search.Buses
            });
        default:
            return state;
    }
}

export default searchReducer;
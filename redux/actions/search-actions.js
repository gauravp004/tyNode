import * as types from './action-types';

export function getCityList(data) {
    return {
        type: types.GET_CITY_LIST,
        data
    };
}

export function getSearchParams(from, to, journeyDate) {
    return {
        type: types.GET_SEARCH_PARAMS,
        from, to, journeyDate
    };
}

export function getSearchResult(search) {
    return {
        type: types.GET_SEARCH_SUCCESS,
        search
    };
}
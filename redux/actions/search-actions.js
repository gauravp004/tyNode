import * as types from './action-types'

export function getCityList(data) {
    return {
        type: types.GET_CITY_LIST,
        data
    }
}

export function getSearchParams(from, to, journeyDate) {
    return {
        type: types.GET_SEARCH_PARAMS,
        from, to, journeyDate
    }
}

export function getSearchResult(search) {
    return {
        type: types.GET_SEARCH_SUCCESS,
        search
    }
}

export function updateSearchBuses(data) {
    return {
        type: types.UPDATE_SEARCH_BUSES,
        data
    }
}



export function updateFilterDeparture(data) {
    return {
        type: types.UPDATE_FILTER_DEP,
        data
    }
}
  
export function updateFilterArrival(data) {
    return {
        type: types.UPDATE_FILTER_ARR,
        data
    }
}
  
export function updateFilterPrice(data) {
    return {
        type: types.UPDATE_FILTER_PRICE,
        data
    }
}
  
export function updateFilterOperators(data) {
    return {
        type: types.UPDATE_FILTER_OPS,
        data
    }
}
  
export function updateFilterPickups(data) {
    return {
        type: types.UPDATE_FILTER_PICK,
        data
    }
}
  
export function updateFilterDropoffs(data) {
    return {
        type: types.UPDATE_FILTER_DROP,
        data
    }
}
  
export function updateFilterAmenities(data) {
    return {
        type: types.UPDATE_FILTER_AMEN,
        data
    }
}
  
export function updateFilterCoach(data) {
    return {
        type: types.UPDATE_FILTER_COACH,
        data
    }
}
  
export function updateFilterDeals() {
    return {
        type: types.UPDATE_FILTER_DEALS
    }
}
  
export function updateFilterMtkt() {
    return {
        type: types.UPDATE_FILTER_MTKT
    }
}
  
export function updateFilterReset() {
    return {
      type: types.UPDATE_FILTER_RESET
    }
}
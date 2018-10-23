import * as types from './action-types';

export function getSeatchart(data) {
    return {
        type: types.GET_SEATCHART_SUCCESS,
        data
    };
}

export function updateSeatSel(data) {
    return {
        type: types.UPDATE_SEAT_SELECTED,
        data
    };
}

export function resetSeatchart() {
    return {
        type: types.RESET_SEATCHART
    }
}
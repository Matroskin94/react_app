import { GO_PRESSED } from '../constants/Constants.js';

export function searchAction(text) {
    return ({
        type: GO_PRESSED,
        payload: text
    });
}

export function locationPressed() {
    return ({
        type: 'TEXT_INP',
        payload: 'Show localtion'
    });
}

import { GO_PRESSED, LETTER_TYPED } from '../constants/constants.js';

export function searchAction(text) {
    return ({
        type: GO_PRESSED,
        payload: text
    });
}

export function typeWordAction(text) {
    return ({
        type: LETTER_TYPED,
        payload: text
    });
}

export function locationPressed() {
    return ({
        type: 'TEXT_INP',
        payload: 'Show localtion'
    });
}

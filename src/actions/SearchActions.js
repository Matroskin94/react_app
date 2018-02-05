export function goPressed() {
    return ({
        type: 'GO_BUTT',
        payload: 'Go to location'
    });
}

export function locationPressed() {
    return ({
        type: 'LOC_BUTT',
        payload: 'Show localtion'
    });
}

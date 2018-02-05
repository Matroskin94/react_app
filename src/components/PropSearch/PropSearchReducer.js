const initialSearch = {
    title: 'Search reducer init'
};

export default function PropSearchReducer(state = initialSearch, action) {
    console.log('Init state');
    console.log(state);
    console.log('Action');
    console.log(action);
    return state;
}

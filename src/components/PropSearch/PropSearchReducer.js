const initialSearch = {
    title: 'Search reducer init'
};

export default function PropSearchReducer(state = initialSearch, action) {
    console.log(action.type);
    return state;
}

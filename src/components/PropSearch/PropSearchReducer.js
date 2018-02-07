import { GO_PRESSED } from '../../constants/constants.js';
const initialState = {
    query: ['empty_queryyy'],
    locations: ['locations empty']
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case GO_PRESSED: {
            let newState = Object.assign({}, state);
            newState.query = state.query.concat(action.payload);
            return newState;
        }
        default: {
            return state;
        }   
    }
}

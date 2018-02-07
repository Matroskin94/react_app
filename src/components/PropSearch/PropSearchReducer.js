import { GO_PRESSED } from '../../constants/constants.js';
const initialState = {
    query: 'empty_queryyy'
};

export default function PropSearchReducer(state = initialState, action) {
    switch (action.type) {
        case GO_PRESSED: {
            return { ...state, quert:action.payload };
        }
        default: {
            return state;
        }    
    }
}

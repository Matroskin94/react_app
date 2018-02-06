import { GO_PRESSED } from '../../constants/constants.js';

export default function PropSearchReducer(state = {}, action) {
    switch (action.type) {
        case GO_PRESSED: {
            return state.push(action.payload);
        }
        default: {
            return state;
        }    
    }
}

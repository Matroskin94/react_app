import { GO_DETAILS } from '../../constants/constants';

const initialState = {
    activeItem: 'InitialState'
};

export default function DetailsReducer(state = initialState, action) {
    switch (action.type) {
        case GO_DETAILS: {
            return {
                ...state,
                activeItem: action.payload
            };
        }

        default: {
            return { ...state };
        }
    }
}

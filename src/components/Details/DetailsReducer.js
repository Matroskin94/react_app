const initialState = {
    activeItem: {}
};

export default function DetailsReducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return { ...state };
        }
    }
}

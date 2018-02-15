import { GO_DETAILS } from '../constants/constants';

export default function goDetailsAction(item) {
    return ({
        type: GO_DETAILS,
        payload: item
    });
}

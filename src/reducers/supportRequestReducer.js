import { 
    SELECT_REQUEST_TYPE,
    FETCH_NEWSLETTER_ARCHIVE,
    FETCH_SUPPORT_REQUESTS
} from "../actions/types";

const INITIAL_STATE = {
    selected: 'pending',
    supportRequests: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_NEWSLETTER_ARCHIVE:
            const selected = action.payload
            return {
                ...state,
                selected
            }
        case FETCH_SUPPORT_REQUESTS:
        const supportRequests = action.payload;

        return {
            ...state,
            supportRequests
        }
        

        default: return state;
    }
}
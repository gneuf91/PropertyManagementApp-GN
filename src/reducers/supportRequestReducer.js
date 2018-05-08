import { 
    SELECT_REQUEST_TYPE
} from "../actions/types";

const INITIAL_STATE = {
    selected: 'pending'
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_NEWSLETTER_ARCHIVE:
        const selected = action.payload
        return {
            ...state,
            selected
        }
        

        default: return state;
    }
}
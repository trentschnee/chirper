import {RECEIVE_USERS} from "../actions/users"
export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                //the new state of our users slice of our state is going to have everything that was on it as well as all of the users which we are grabbing from the action
                ...state,
                ...action.users
            }
        default: return state

    }
}
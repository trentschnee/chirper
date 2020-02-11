// Import the getInitialData function from the API
import {getInitialData} from "../utils/api";
//Import the action creators
import {recieveUsers} from "../actions/users"
import {recieveTweets} from "../actions/tweets"
import {setAuthedUser} from "../actions/authedUser"
// Simulation of getting the authorized user.
const AUTHED_ID = 'tylermcginnis'
export function handleInitialData (){
    return (dispatch) => {
        // Returns a promise with users and tweets property
        return getInitialData({users, tweets}).then(()=> {
            dispatch(recieveUsers(users))
            dispatch(recieveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }

}
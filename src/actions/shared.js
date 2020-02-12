// Import the getInitialData function from the API
import { getInitialData } from "../utils/api";
//Import the action creators
import { receiveUsers } from "../actions/users";
import { receiveTweets } from "../actions/tweets";
import { setAuthedUser } from "../actions/authedUser";
import { showLoading, hideLoading } from "react-redux-loading";
// Simulation of getting the authorized user.
const AUTHED_ID = "tylermcginnis";
export function handleInitialData() {
  return dispatch => {
    // Dispatch show loading action before we get the tweet data
    dispatch(showLoading());
    // Returns a promise with users and tweets property
    return getInitialData().then(({ users, tweets }) => {
      // Dispatches the created actions
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      // Dispatch hide loading action after we get the tweet data
      dispatch(hideLoading());
    });
  };
}

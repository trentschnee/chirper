import { RECEIVE_TWEETS } from "../actions/tweets";
export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        //the new state of our tweets slice of our state is going to have everything that was on it as well as all of the tweets which we are grabbing from the action
        ...state,
        ...action.tweets
      };
    default:
      return state;
  }
}

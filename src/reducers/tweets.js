import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

export default function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        // the new state of our tweets slice of our state is going to have everything that was on it as well as all of the tweets which we are grabbing from the action
        ...state,
        ...action.tweets
      };
    case TOGGLE_TWEET:
      return {
        // spread previous tweets on state (don't want to mutate state directly) return a brand new object. Spread all previous tweets on that object
        ...state,
        // the tweet with the id needs to be a new object and we want to take in all the properties of that object and spread them across to a new object
        [action.id]: {
          ...state[action.id],
          // but on the likes array we want to remove the username or add the username is the user has liked it.
          likes:
            action.hasLiked === true
              ? // filter out user if they have liked the tweet
                state[action.id].likes.filter(uid => uid !== action.authedUser)
              : // otherwise, add the user to the likes array
                state[action.id].likes.concat([action.authedUser])
        }
      };
    case ADD_TWEET:
      const { tweet } = action;
      let replyingTo = {};
      if (tweet.replyingTo !== null) {
        replyingTo = {
          [tweet.replyingTo]: {
            //previous state of replying to on specific index
            ...state[tweet.replyingTo],
            replies: state[tweet.replyTo].replies.concat([tweet.id])
          }
        };
      }
      //return all previous tweets onto it
      return {
        ...state,
        //then add the tweet and replying to
        [action.tweet.id]: action.tweet,
        ...replyingTo
      };
    default:
      return state;
  }
}

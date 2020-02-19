import { saveLikeToggle, saveTweet } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const ADD_TWEET = "ADD_TWEET";
export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}
function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}
export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      text,
      author: authedUser,
      replyingTo
    })
      .then(tweet => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}
//takes in an object that has an id, authedUser property, and hasLiked property
function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
  };
}
// Going to do an ajax request inside of here. Needs to return a function. This is called a thunk. Responsible for dispatching toggle tweet as well as saving the info to a database
export function handleToggleTweet(info) {
  return dispatch => {
    dispatch(toggleTweet(info));
    // Optimistic updates, return what it was initially if the promise returns an error.
    return saveLikeToggle(info).catch(e => {
      console.warn("Error in handleToggleTweet:", e);
      dispatch(toggleTweet(info));
      alert("There was an error liking your tweet! Try again.");
    });
  };
}

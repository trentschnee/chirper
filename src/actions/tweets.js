// Action type when we recieve and dispatch all of our states to our store.
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
// Recieve tweets action creator.
export function receiveTweets(tweets){
return{
    type: RECEIVE_TWEETS,
    tweets,
}
}
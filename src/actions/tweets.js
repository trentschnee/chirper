// Action type when we recieve and dispatch all of our states to our store.
export const RECIEVE_TWEETS = "RECIEVE_TWEETS";
// Recieve tweets action creator.
export function recieveTweets(tweets){
return{
    type: RECIEVE_TWEETS,
    tweets,
}
}
// Action type when we recieve and dispatch all of our states to our store.
export const RECEIVE_USERS = "RECEIVE_USERS";
// Recieve users action creator.
export function receiveUsers(users){
return{
    type: RECEIVE_USERS,
    users,
}
}
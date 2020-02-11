// Show us anytime a new action is dispatched as well as waht the new state is going to be after it's dispatched.
const logger = (store) => (next) => (action) =>{
    console.group(action.type);
    console.log('The action: ', action);
    //updates the state
    const returnValue = next(action)
    console.log('The new state:', store.getState());
    console.groupEnd();
    return returnValue;
}
// Make this the default export
export default logger;
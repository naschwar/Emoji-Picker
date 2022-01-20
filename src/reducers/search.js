const searchReducer = (state=[], action) =>{
    switch(action.type){
        case "UPDATE_SEARCH":
            return action.matches;
        case "CLEAR_SEARCH":
            return [];
        default:
            return state;
    }
}

export default searchReducer;

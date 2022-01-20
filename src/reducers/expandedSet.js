const expandedSetReducer = (state={set:[], emojiRef: null}, action) =>{
    switch(action.type){
        case "COLLAPSE_SET":
            if(state.ref){ 
                state.ref.style.backgroundColor = "rgb(234, 237, 242)";
            }
            return {set: [], ref: null};
        case "TOGGLE_EXPAND":
            if ((state.set.length > 0) && (state.set[0].codes == action.emojiSet[0].codes)){ //case where clicked set is the already expanded set -> collapse
                state.ref.style.backgroundColor = "rgb(234, 237, 242)";
                return {set: [], ref: null};
            }else{ //any other set was clicked
                if(state.ref){ 
                    state.ref.style.backgroundColor = "rgb(234, 237, 242)";
                }
                return {set: action.emojiSet, ref: action.emojiRef};
            }
        default:
            return state;
    }
}
export default expandedSetReducer;



const selectedEmojiReducer = (state={currentEmoji:{char:" "}, recentlyViewed:[]}, action) =>{
    switch(action.type){
        case "NEW_SELECTION":
            if(!state.recentlyViewed.includes(action.currentEmoji)){
                state.recentlyViewed.push(action.currentEmoji);
            }
            if (state.recentlyViewed.length > 20){
                state.recentlyViewed.shift();
            }
            return {currentEmoji: action.currentEmoji, recentlyViewed: state.recentlyViewed};
        default:
            return state;
    }
}
export default selectedEmojiReducer;
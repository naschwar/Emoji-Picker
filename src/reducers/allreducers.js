import { combineReducers } from "redux"
import expandedSetReducer from "./expandedSet"
import selectedEmojiReducer from "./selectedEmoji"
import searchReducer from "./search"

const allReducers = combineReducers({
    selectedEmoji: selectedEmojiReducer,
    expandedSet: expandedSetReducer,
    searchResults: searchReducer
})

export default allReducers
import { useRef } from "react";
import EmojiCategory from "./EmojiCategory";
import { useDispatch } from "react-redux";
const EmojiSearch = () => {
    var emojiJson = require("emoji.json");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const filter = () => {
        dispatch(
            {type: "UPDATE_SEARCH", 
            matches: (inputRef.current.value == "") ? [] : emojiJson.filter((emoji) =>{return emoji.name.includes(inputRef.current.value)}) } 
        );
    }

    return(
        <div>
            <input ref={inputRef} className="searchBar" type="text" placeholder="Search" onChange={filter}/>
            <EmojiCategory category={{name: "Search"}} key={"Search"}/>
        </div>
    )
}
export default EmojiSearch;
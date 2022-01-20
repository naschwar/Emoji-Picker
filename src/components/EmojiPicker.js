import EmojiCategory from './EmojiCategory';
import EmojiSummary from './EmojiSummary';
import { useRef } from 'react';
import EmojiSearch from './EmojiSearch';
import EmojiExpanded from './EmojiExpanded';

//create array of objects with structure [{categoryName: , ref: null}], 
//initialize with the category names and create the make the references point to the corresponding EmojiCategory component
//iterate over the array to create all the emojiCategories, then pass the references into the emoji summary items

const EmojiPicker = () => {
    let categories = [ {name: "Recently Viewed", ref: useRef(null)},
        {name: "Smileys & Emotion", ref: useRef(null)}, {name: "People & Body", ref: useRef(null)}, {name: "Animals & Nature", ref: useRef(null)}, {name: "Food & Drink", ref: useRef(null)}, {name: "Travel & Places", ref: useRef(null)}, {name: "Activities", ref: useRef(null)}, {name: "Objects", ref: useRef(null)},{name: "Symbols", ref: useRef(null)},{name: "Flags", ref: useRef(null)}  
    ]
    return (
        <div className="emojiPicker">
            <EmojiSearch/>
            <EmojiExpanded />
            {
            categories.map((category)=>{
                return <EmojiCategory category={category} key={category.name}/>
            })
            }
            {/* <EmojiSummary categories={categories}/> */}
        </div>
    )
}

export default EmojiPicker;

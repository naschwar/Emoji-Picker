import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SingleEmoji from './SingleEmoji';
import EmojiExpanded from './EmojiExpanded';

const EmojiCategory = ({category}) => {
    var emoji = require('emoji.json')
    const isRecentlyViewed = (category.name == "Recently Viewed");
    const isSearch = (category.name == "Search");
    const emojiState = useSelector((state) => state.selectedEmoji);
    const searchState = useSelector((state) => state.searchResults);

    var emojiList = [];
    if(isRecentlyViewed){
        emojiList = emojiState.recentlyViewed;
    }else if(isSearch){
        emojiList = searchState;
    }else{
        emojiList = emoji.filter(el=>el.group==category.name); //emojis in a category
    } 
    const [emojiDict, setEmojiDict] = useState({}); //emojis organized for doing skin tone expanded view
    console.log(emojiList)
    //Use to restructure the emoji data for expanded skin tone view. Need to be able to look up emoji by base-code (which will correspond to the yellow emoji)
    //Only want to restructure when the emoji list is updated (which will never happen except for the "Recently Viewed category")
    useEffect(()=>{
        let organizedEmojis = {};
        emojiList.forEach(el => {
            let name = isRecentlyViewed ? el.name : el.name.split(":")[0];
            if(organizedEmojis[name]){
                organizedEmojis[name].push(el);
            }else{
                organizedEmojis[name] = [el];
            }
        });
        setEmojiDict(organizedEmojis);
    }, [isRecentlyViewed ? emojiState : isSearch ? searchState : null]);
    return (
        <div className="emojiCategory">
            <h1>{category.name}</h1>
            <div className="categoryContainer">
                {Object.keys(emojiDict).map(el=>{
                   return <SingleEmoji emojiGroup={emojiDict[el]} hasExpansion={(emojiDict[el].length > 1)} key={emojiDict[el][0].codes}/>
                })}
            </div>  
        </div>
    )
}

export default EmojiCategory;

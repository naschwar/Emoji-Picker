import SingleEmoji from "./SingleEmoji";
import { useSelector } from "react-redux";
const EmojiExpanded = () => {
    const expandedSet = useSelector((state) => state.expandedSet);
    if(expandedSet.ref){expandedSet.ref.style.backgroundColor = "rgb(210, 224, 193)"}

    return (
            <div>{
                (expandedSet.set.length > 0) ?
                    <div className = "expandedSet" style={{top: `${expandedSet.ref.offsetTop + 40}`+ 'px'}}>{
                        expandedSet.set.map((emoji) => {
                            return <SingleEmoji emojiGroup={[emoji]} hasExpansion={false} key={emoji.codes}/>
                        })
                } </div>
                : "" }
            </div>
    )
}

export default EmojiExpanded;
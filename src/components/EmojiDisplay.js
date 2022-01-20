import { useSelector } from "react-redux";

const EmojiDisplay = () => {
    const selected = useSelector((state) => state.selectedEmoji);
    return (
        <div className="emojiDisplay">
            {selected.currentEmoji.char}
        </div>
    )
}
export default EmojiDisplay;
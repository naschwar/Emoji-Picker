import { useRef, useState } from 'react';
import { useDispatch,  useSelector} from 'react-redux';

const SingleEmoji = ({emojiGroup, hasExpansion}) =>{
    const dispatch = useDispatch();
    const emojiRef = useRef(null);
    const emojiClickHandler = (newEmoji) => {
        if(hasExpansion){
            dispatch({type: "TOGGLE_EXPAND", emojiSet: emojiGroup, emojiRef: emojiRef.current});
        }else{
            dispatch({type: "NEW_SELECTION", currentEmoji: newEmoji});
            dispatch({type: "COLLAPSE_SET"});
        }
    }

    return (
        <div className="emojiChar" ref={emojiRef} > {
            <div>
                <div onClick={()=>emojiClickHandler(emojiGroup[0])}>{emojiGroup[0].char}</div>
            </div>
        }
        </div>
    )
}

export default SingleEmoji;
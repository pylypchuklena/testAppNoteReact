import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';

interface commentProps{
    item: NoteComment;
}

export function NoteCommentsItem({item}:commentProps){
    return(
        <li className="comment flex-row">
            <div className="col-left flex-col">
                <span className="comment__author">{item.author}</span>
                <span className="comment__date">{item.createDate.toLocaleString()}</span>
            </div>
            <div className="col-rigth flex-grow">
                <span className="comment__content">{item.content}</span>
            </div>
        </li>
    )
}
export default NoteCommentsItem;
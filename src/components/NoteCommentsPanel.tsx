import * as React from "react";
import {NoteModel, NoteComment} from '../types/NoteModel';
import NoteCommentsItem from "./NoteCommentsItem";
import NoteNewComment from "./NoteNewComment";

export interface IListCommentProps{
    listComment: NoteComment[];
    noteId:string;
    addComment?: (comment:NoteComment) => void;
}

export function NoteCommentsPanel({listComment,noteId, addComment}:IListCommentProps){
    if(listComment)
    {
    const commentItems = listComment.map((item)=>
        <NoteCommentsItem key={item.id} item={item}/> ) 
    return(
        <div className="comments__panel">
            <div className={"comments " + ((listComment.length>0) ? 'show' : 'hide')}>
                <div className="comments__header">Comments : </div>
                <ul className="comment__list">
                    {commentItems}
                </ul>
            </div>
            <NoteNewComment onAddComment={(item)=>{ item.noteId=noteId; addComment(item);}}/>
        </div>
    )
}
else return <div></div>
}
export default NoteCommentsPanel;
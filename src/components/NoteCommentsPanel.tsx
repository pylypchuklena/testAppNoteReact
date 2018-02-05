import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';
import NoteCommentsItem from "./NoteCommentsItem";
import NoteNewComment from "./NoteNewComment";

export interface IListCommentProps {
    listComment: NoteComment[];
    noteId: string;
    addComment: (comment: NoteComment) => void;
}

export class NoteCommentsPanel extends React.Component<IListCommentProps> {
    constructor(props: IListCommentProps) {
        super(props);

    }
    render() {
        if (this.props.listComment) {
            const commentItems = this.props.listComment.map((item) =>
                <NoteCommentsItem key={item.id} item={item} />)
            return (
                <div className="comments__panel">
                    <div className={"comments " + ((this.props.listComment.length > 0) ? 'show' : 'hide')}>
                        <div className="comments__header">Comments : </div>
                        <ul className="comment__list">
                            {commentItems}
                        </ul>
                    </div>
                    <NoteNewComment 
                    onAddComment={(item) => { item.noteId = this.props.noteId; this.props.addComment(item); }} />
                </div>
            )
        }
        else return <div></div>
    }
}
export default NoteCommentsPanel;
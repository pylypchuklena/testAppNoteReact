import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';

interface commentProps {
    item: NoteComment;
}

export class NoteCommentsItem extends React.Component<commentProps>{

    constructor(props: commentProps) {
        super(props);

    }
    render() {
        return (
            <li className="comment flex-row">
                <div className="col-left flex-col">
                    <span className="comment__author">{this.props.item.author}</span>
                    <span className="comment__date">{this.props.item.createDate.toLocaleString()}</span>
                </div>
                <div className="col-rigth flex-grow">
                    <span className="comment__content">{this.props.item.content}</span>
                </div>
            </li>
        )
    }
}
export default NoteCommentsItem;
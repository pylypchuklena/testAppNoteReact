import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';

interface itemProps {
    item: NoteModel;
    onSelectionChanged: (id: string) => void;
    deleteNote: (id: string) => void;
}

export class ListNotesItem extends React.Component<itemProps>{
    constructor(props:itemProps){
        super(props);
    }
    render() {
        return (
            <li className={"notes-list__item flex-column " + (this.props.item.isSelected ? ' active' : '')}
                onClick={() => { this.props.onSelectionChanged(this.props.item.id) }}>
                <div className="notes-list__item__delete"
                    onClick={(e) => { this.props.deleteNote(this.props.item.id); e.preventDefault(); e.stopPropagation(); }}
                >
                    <span className="fa fa-trash-o"
                        ></span>
                </div>
                <div className="notes-list__item__header">
                    <span className="comment__author">{this.props.item.name}</span>

                </div>
                <div className="notes-list__item__footer flex-row">
                    <span className="comment__date comment__date--list">{this.props.item.date}</span>
                    <span className="comment__content comment__content--list ">{this.props.item.content}</span>
                </div>
            </li>
        )
    }
}
export default ListNotesItem;
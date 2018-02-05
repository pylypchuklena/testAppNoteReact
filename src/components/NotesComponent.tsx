import * as React from "react";
import NoteContent from '../components/NoteContent';
import NoteCommentsPanel from './NoteCommentsPanel';
import { NoteModel, NoteComment } from "../types/NoteModel";
import { Link } from 'react-router-dom';


export interface INoteContainer {
    note: NoteModel;
    updateNote: (item: NoteModel) => void;
}

export class NotesComponent extends React.Component<INoteContainer>{
    constructor(props: INoteContainer) {
        super(props);
    }

    render() {
        if (this.props.note) {
            return (
                <div className="note--container">
                    <NoteContent selectedItem={this.props.note}
                        updateNote={this.props.updateNote} />
                </div>
            )
        }
        else
            return (
                <Link to={'/newNote'}>
                    <div className="note--EmptyContainer">
                        <span className="fa fa-pencil"></span>
                    </div>
                </Link>
            )
    }
}
export default NotesComponent;
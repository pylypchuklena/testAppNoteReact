import * as React from "react";
import ListNotesItem from './ListNotesItem';
import { INoteContainer } from './NotesComponent';
import { NoteModel } from "../types/NoteModel";

export interface IListProps {
    notesList: NoteModel[];
    onSelectionChanged: (id: string) => void;
    deleteNote: (id: string) => void;
}

export class ListNotes extends React.Component < IListProps > {
    constructor(props: IListProps) {
        super(props);
    }
    
    render() {
        var listItems = this.props.notesList.map((item) =>
        <ListNotesItem key={item.id}
            item={item}
            onSelectionChanged={this.props.onSelectionChanged}
            deleteNote={this.props.deleteNote} />);
        return (
            <ul className="notes-list">
                {listItems}
            </ul>
        );
    }
}
export default ListNotes;
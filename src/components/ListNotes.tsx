import * as React from "react";
import  ListNotesItem  from './ListNotesItem';
import {INoteContainer} from './NotesComponent';
import { NoteModel } from "../types/NoteModel";

export interface IListProps{
    notesList:NoteModel[];
    onSelectionChanged: (id:string)=>void;
    deleteNote:(id:string)=>void;
}

export function ListNotes({notesList,onSelectionChanged,deleteNote}:IListProps){
    const listItems = notesList.map((item) =>
    <ListNotesItem key={item.id}
     item={item}
     onSelectionChanged={onSelectionChanged} 
     deleteNote={deleteNote}/>);
    return(
        <ul className="notes-list">
           {listItems}
        </ul>
      
    );
}
export default ListNotes;
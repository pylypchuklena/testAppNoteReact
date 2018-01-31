import * as React from "react";
import  NoteContent  from '../components/NoteContent'; 
import NoteCommentsPanel from './NoteCommentsPanel';
import {NoteModel, NoteComment  } from "../types/NoteModel";


export interface INoteContainer {
    note: NoteModel;
    updateNote: (item:NoteModel)=>void;
    onAddNote:()=>void;
}

export function NotesComponent({note,updateNote, onAddNote}:INoteContainer){
    if(note)
    {
        return(
        <div className="note--container">
            <NoteContent selectedItem={note} updateNote={updateNote}/>
        </div>
        )
    }
    else
    return (
        <div className="note--EmptyContainer" onClick={()=>{onAddNote()}}> 
            
                <span className="fa fa-pencil"></span>
           
        </div>
        
    )
    
}
export default NotesComponent;
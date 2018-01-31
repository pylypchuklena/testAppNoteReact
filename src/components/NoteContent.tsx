import * as React from 'react'
import { NoteModel } from '../types/NoteModel';

export interface itemProps{
    selectedItem:NoteModel;
    updateNote: (item:NoteModel)=>void;
}

export function NoteContent({selectedItem,updateNote}:itemProps){
    function handleChangeTitle(e:any){
        updateNote({...selectedItem,name:e});
    }
    function handleChangeContent(e:any){
        updateNote({...selectedItem,content:e});
    }
    function handleSubmit(e:any){
        e.preventDeault();
    }
    if(selectedItem){
        
    return(
        <form onSubmit={(e)=>handleSubmit(e.preventDefault())}>
            <div className="note__header">
                <label className="flex-row">
                    <input type="text" placeholder="Title" value={selectedItem.name} onChange={(e)=>handleChangeTitle(e.target.value)}/>
                </label>
            </div>
            <div className="note__content">
                <textarea  value={selectedItem.content} onChange={(e)=>handleChangeContent(e.target.value)}></textarea>
            </div>
        </form>
    )}
    else return (<div></div>)

}
 
export default NoteContent;
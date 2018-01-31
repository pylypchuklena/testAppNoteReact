import * as constants from '../constants';
import { SourceTypes, NoteModel, NoteComment, AppState } from '../types/NoteModel';
import { INoteAction } from './index';
import{ v4 } from 'node-uuid';
import {loadState} from "../services/localStorageService"
import {firebaseRef} from '../index'

//source

export interface INoteAction{
    type:string;
    value:any
}

export function changeStore(sourceType:number):INoteAction{
    var curentState:AppState;
    if(sourceType == SourceTypes.LOCALSTORAGE)
    {
         curentState = loadState(SourceTypes.LOCALSTORAGE);
         return {
            type:constants.CHANGE_SOURCE,
            value:{
                state:curentState,
                sourceType:sourceType}
        }
    }
    else{
        //  firebaseRef.database().ref('state').once('value').then(
        //     (snap:any)=>{
        //         curentState = snap.val();
        //         console.log("From Firebase",curentState);
        //         return {
        //             type:constants.CHANGE_SOURCE,
        //             value:{
        //                 state:curentState,
        //                 sourceType:sourceType}
        //         }
        //     }
        // )
         curentState = loadState(SourceTypes.FIREBASE);
    }

    if(!curentState)
    {
        curentState = {notes:new Array<NoteModel>(),
            comments:new Array<NoteComment>(),
            storageType:SourceTypes.LOCALSTORAGE}
    }

    return {
        type:constants.CHANGE_SOURCE,
        value:{
            state:curentState,
            sourceType:sourceType}
    }
}

export function addNote():INoteAction{
        var item = new NoteModel();
        item = {id:v4(), name:'', content: '', date: new Date().toLocaleString(), isSelected: true};
    return {
        type:constants.ADD_NOTE,
        value: item
    }
}

export function selectNote(id:string):INoteAction{
    return {
        type:constants.CHANGE_SELECTED_NOTE,
        value:id
    }
}

export function deleteNote(id:string):INoteAction{
    return {
        type:constants.DELETE_NOTE,
        value:id
    }
}
export function addComment(comment:NoteComment):INoteAction{
    comment.id= v4();
    comment.createDate = new Date().toLocaleString();
    
    return{
        type:constants.ADD_COMMENT,
        value:comment
    }
}

export function updateNote(item:NoteModel):INoteAction{
    item.date = new Date().toLocaleString();
    return{
        type:constants.UPDATE_NOTE,
        value:item
    }
}
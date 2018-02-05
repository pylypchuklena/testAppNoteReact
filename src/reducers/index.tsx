import { INoteAction } from '../actions';
import { AppState, SourceTypes, NoteModel, NoteComment } from '../types/NoteModel';
import * as constants from '../constants';
import { combineReducers } from 'redux';

function addNote(state:NoteModel[], item:NoteModel):NoteModel[]{
    var unselectedNoteList = state.map(item=>{return {...item, isSelected:false} as NoteModel;})
    return [...unselectedNoteList, item];
}

function deleteNote(state:NoteModel[],id:string):NoteModel[]{
    return  state.filter(item=>{return item.id!=id});
}

function changeSelectedNote(state:NoteModel[], id:string):NoteModel[]{
    return state.map(note=>{
        if(note.id != id)
        {
            if (note.isSelected)
                return {...note, isSelected:false} as NoteModel;
            return note;
        }
        return {...note, isSelected:true} as  NoteModel;
    })
}

function updateNote (state:NoteModel[],item: NoteModel):NoteModel[]{
    return state.map(note=>{
            if(note.id == item.id)
            {
                return item;
            }
            return note;   
        }  
    )
}

function addNewComment(state:NoteComment[], item:NoteComment):NoteComment[]{
 
    return[...state, item]
}

export const appReduser = combineReducers<AppState>({
    storageType : sourceReduser,
    comments: commentReduser,
    notes: noteReduser
}) 

export function sourceReduser(state: number=SourceTypes.LOCALSTORAGE, action:INoteAction): number{
    switch (action.type){
        case constants.CHANGE_SOURCE:
            return action.value.sourceType;
        default:
            return state;
    }
}

export function commentReduser(state:NoteComment[]=[], action:INoteAction): NoteComment[]{
    switch (action.type) {
        case constants.ADD_COMMENT:
            return addNewComment(state, action.value as NoteComment);
            case constants.CHANGE_SOURCE:
            return action.value.state.comments;
        default:
            return state;
    }
}

export function noteReduser(state:NoteModel[]=[], action:INoteAction): NoteModel[]{
    switch (action.type) {
        case constants.ADD_NOTE:
            return addNote(state, action.value as NoteModel);
        case constants.DELETE_NOTE:
            return deleteNote(state,action.value as string);
        case constants.CHANGE_SELECTED_NOTE:
            return changeSelectedNote(state,action.value as string );
        case constants.UPDATE_NOTE:
            return updateNote(state,action.value as NoteModel);
            case constants.CHANGE_SOURCE:
            return action.value.state.notes;
        default:
            return state;
    }
}
import * as constants from '../constants';
import { SourceTypes, NoteModel, NoteComment, AppState } from '../types/NoteModel';
import { INoteAction } from './index';
import { v4 } from 'node-uuid';
import { loadState } from "../services/localStorageService"
import { firebaseRef } from '../index'

//source

export interface INoteAction {
    type: string;
    value: any
}

function newState(): AppState {
    return {
        notes: new Array<NoteModel>(),
        comments: new Array<NoteComment>(),
        storageType: SourceTypes.LOCALSTORAGE
    };
}

export function fetchNotesFromFireBase() {
    return function (dispatch: any) {
        return firebaseRef.database().ref('state').once('value').then(
            (snap: any) => {
                var curentState = snap.val();

                if (!curentState.notes)
                    curentState.notes = new Array<NoteModel>();
                if (!curentState.comments)
                    curentState.comments = new Array<NoteComment>();

                dispatch({
                    type: constants.CHANGE_SOURCE,
                    value: {
                        state: curentState,
                        sourceType: SourceTypes.FIREBASE
                    }
                });
            });
    }
}

export function fetchNotesFromLocalStorage(): INoteAction {

    var curentState = loadState(SourceTypes.LOCALSTORAGE);

    if (!curentState)
        curentState = newState();

    return {
        type: constants.CHANGE_SOURCE,
        value: {
            state: curentState,
            sourceType: SourceTypes.LOCALSTORAGE
        }
    }
}

export function addNote(item: NoteModel): INoteAction {
    if (!item) {
        item = new NoteModel();
        item = { id: v4(), name: '', content: '', date: new Date().toLocaleString(), isSelected: true };
    }
    else {
        item.date = new Date().toLocaleString();
        item.id = v4();
        item.isSelected = true;
    }

    return {
        type: constants.ADD_NOTE,
        value: item
    }
}

export function selectNote(id: string): INoteAction {
    return {
        type: constants.CHANGE_SELECTED_NOTE,
        value: id
    }
}

export function deleteNote(id: string): INoteAction {
    return {
        type: constants.DELETE_NOTE,
        value: id
    }
}
export function addComment(comment: NoteComment): INoteAction {
    comment.id = v4();
    comment.createDate = new Date().toLocaleString();

    return {
        type: constants.ADD_COMMENT,
        value: comment
    }
}

export function updateNote(item: NoteModel): INoteAction {
    item.date = new Date().toLocaleString();
    return {
        type: constants.UPDATE_NOTE,
        value: item
    }
}
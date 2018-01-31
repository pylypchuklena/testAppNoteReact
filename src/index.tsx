import * as React from 'react';
import * as ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { NoteModel, AppState , SourceTypes, NoteComment} from './types/NoteModel';
import { appReduser} from './reducers/index';
import AppContainer from './components/AppContainer';
import {loadState,saveState} from './services/localStorageService';
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDZJW0IzePTQ_tFpisB-5XhdiuBk6uP47s",
    authDomain: "appnote-753e9.firebaseapp.com",
    databaseURL: "https://appnote-753e9.firebaseio.com",
    projectId: "appnote-753e9",
    storageBucket: "appnote-753e9.appspot.com",
    messagingSenderId: "869533666247"
  };
  export const firebaseRef = firebase.initializeApp(config);
const persistedState = loadState(SourceTypes.LOCALSTORAGE);

// import '../index.css';

function defaultState():AppState {
    
    return {
        notes:new Array<NoteModel>(),
        comments:new Array<NoteComment>(),
        storageType:SourceTypes.LOCALSTORAGE
    };
}

const store = createStore<AppState>(appReduser,persistedState)

store.subscribe(()=>{
    
    if(store.getState().storageType == SourceTypes.LOCALSTORAGE)
        saveState(store.getState(),SourceTypes.LOCALSTORAGE);
        else
        //firebaseRef.database().ref("state").set(store.getState());
        saveState(store.getState(),SourceTypes.FIREBASE);
})

ReactDom.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("app") as HTMLElement
);


 
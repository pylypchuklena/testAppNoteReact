import { AppState } from "../types/NoteModel";

export function loadState(key:number):AppState{
    try{
        var serializedState = localStorage.getItem(key.toString());
        if (serializedState == null)
            return undefined;
        return (JSON.parse(serializedState) as AppState);
    }
    catch(err) 
    {
        return undefined;
    }
} 

export function saveState(state:AppState,key:number){
    try{
        var serializedState = JSON.stringify(state);
        localStorage.setItem(key.toString(),serializedState);
    }
    catch(err){

    }
}
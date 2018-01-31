export const SourceTypes = {
    LOCALSTORAGE:0,
    FIREBASE:1
}

export class NoteModel{
    id: string;
    name:string;
    content:string;
    date:string;
    isSelected:boolean;
}
export class NoteComment{
    id:string;
    noteId:string;
    author:string;
    content:string;
    createDate:string;
}

export class AppState{
    storageType: number;
    notes:Array<NoteModel>;
    comments: Array<NoteComment>;
}

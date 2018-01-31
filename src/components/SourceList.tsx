import * as React from "react"
import { NoteModel, SourceTypes } from '../types/NoteModel';

export interface Props {
    selectStorage: number;
    changeSource?: (selectStorage:number) => void;
  }

export function SourceList({selectStorage, changeSource}:Props){
    return(
        <div className="nav-wrap bg-gray">
            <ul className="nav flex-column ">
                <li className={"nav-item nav-item--btn " + (selectStorage == SourceTypes.LOCALSTORAGE? "active":"")} 
                onClick={()=>{changeSource(SourceTypes.LOCALSTORAGE)}}>
                    < a className="nav-link" href="#">LocalStorage</a>
                </li>
                <li className={"nav-item nav-item--btn "+ (selectStorage == SourceTypes.FIREBASE? "active":"")} 
                onClick={()=>{changeSource(SourceTypes.FIREBASE)}}>
                    <a className="nav-link" href="#">FireBase</a>
                </li>
            </ul>
        </div>
    );
}
export default SourceList; 
import * as actions from '../actions/';
import { AppState, SourceTypes, NoteModel, NoteComment } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import noteList from '../components/ListNotes';
import { NotesComponent } from "../components/NotesComponent";

export function mapStateToProps(state:AppState){
    var items = state.notes.filter(item=> {return item.isSelected === true});
    var item = items.length>0 ? items[0] : undefined;
    return {
    note: item
  };
}


export function mapDispatchToProps(dispatch: Dispatch<actions.INoteAction>) {
  return {
    updateNote: (item:NoteModel) => {dispatch(actions.updateNote(item))}
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NotesComponent);
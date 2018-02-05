import * as actions from '../actions/';
import { AppState, NoteModel } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import { NewNoteComponent } from '../components/NewNoteComponent';
import { withRouter } from 'react-router-dom'

export function mapStateToProps(state:AppState){
    return{
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.INoteAction>) {
  return {
    onAddNote:(note:NoteModel) => { dispatch(actions.addNote(note))}
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NewNoteComponent);
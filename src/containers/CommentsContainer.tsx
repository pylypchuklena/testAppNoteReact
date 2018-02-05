import * as actions from '../actions/';
import { AppState, SourceTypes, NoteModel, NoteComment } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import noteList from '../components/ListNotes';
import{ v4 } from 'node-uuid';
import NoteCommentsPanel from '../components/NoteCommentsPanel';


export function mapStateToProps(state:AppState){
    var items = state.notes.filter(item=> {return item.isSelected === true});
    var item = items.length>0 ? items[0] : undefined;
    var listComment;
    if(item)
    {
        listComment = state.comments.filter(i => {return i.noteId == item.id})
    }
    return {
        noteId: item ? item.id:"",
        listComment:listComment
    };
}


export function mapDispatchToProps(dispatch: Dispatch<actions.INoteAction>) {
  return {
    addComment:(comment:NoteComment) => { dispatch(actions.addComment(comment)) }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteCommentsPanel);
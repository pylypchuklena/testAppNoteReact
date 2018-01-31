import * as actions from '../actions/';
import { AppState } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import OptionPanel from '../components/OptionPanel';


export function mapDispatchToProps(dispatch: Dispatch<actions.INoteAction>) {
  return {
    onAddNote: () => dispatch(actions.addNote())
  };
}

export default connect((()=>{}),mapDispatchToProps)(OptionPanel);
import * as actions from '../actions/';
import { AppState, SourceTypes } from '../types/NoteModel';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';
import { SourceList } from '../components/SourceList';


export function mapStateToProps(state:AppState){
    return {selectStorage: state.storageType}
}

export function mapDispatchToProps(dispatch: Dispatch<actions.INoteAction>) {
  return {
    changeSource: (item:number) => dispatch(actions.changeStore(item))
  };
} 

export default connect(mapStateToProps,mapDispatchToProps)(SourceList);
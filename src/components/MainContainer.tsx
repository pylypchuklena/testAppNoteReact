import * as React from 'react';
import OptionPanel from './OptionPanel';
import SourceList from './SourceList';
import NotesContainer from '../containers/NotesContainer';
import ActiveNoteContainer from '../containers/ActiveNoteContainer';
import CommentsContainer from '../containers/CommentsContainer';
import SourceContainer from '../containers/SourceContainer';

export class MainContainer extends React.Component<any, any>{
    render() {
        return (
            <div className="row">
                <div className="col-sm-4 no-pdng-r">
                        <NotesContainer/>
                </div>
                <div className="col-sm-8 no-pdng-l ">
                    <div className="activeNoteSection">
                        <ActiveNoteContainer/>
                        <CommentsContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
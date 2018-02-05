import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { MainContainer } from './MainContainer';
import AddNotesContainer from '../containers/AddNotesContainer';
import SourceContainer from '../containers/SourceContainer';
import OptionPanel from './OptionPanel';

function AppContainer() {
    return (
        <Router>
            <div className="container">
                <OptionPanel />
                <div className="row">
                    <div className="col-12">
                        <Route exact path="/" component={MainContainer}/>
                        <Route path="/options" component={SourceContainer} />
                        <Route path="/newNote" component={AddNotesContainer} />
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default AppContainer;
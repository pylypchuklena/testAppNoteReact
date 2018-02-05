import * as React from "react";
import { Link } from 'react-router-dom';



export class OptionPanel extends React.Component<any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <nav className="navbar bg-gradient navbar-expand-md navbar-light bg-faded">
                        <div className=" navbar-collapse">
                            <ul className="navbar-nav mr-auto nav-items--left">
                                <li className="nav-item"><Link className="nav-link" to="/" ><span className="fa fa-2x fa-home"></span></Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/newNote"> <span className="fa fa-1x fa-pencil"></span>Add Note</Link></li>
                            </ul>
                            <ul className="mt-2 mt-mf-0 navbar-nav ">
                                <li className="nav-item"><Link className="nav-link" to="/options"> <span className="fa fa-2x fa-cogs"></span></Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
export default OptionPanel;
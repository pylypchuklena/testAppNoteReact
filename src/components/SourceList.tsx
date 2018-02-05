import * as React from "react"
import { NoteModel, SourceTypes } from '../types/NoteModel';
import { Redirect } from 'react-router';

export interface Props {
    selectStorage: number;
    changeSource: (item: number) => void;
}

export interface State {
    isRedirect: boolean;
    isChecked: boolean;
}

export class SourceList extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { isRedirect: false, isChecked: false };
        this.navigateBack = this.navigateBack.bind(this);
    }

    onSelect(type: number): void {
        this.props.changeSource(type);
    }

    navigateBack(e: any) {
        this.setState({ isRedirect: true });
    }
   
    render() {
        if (this.state.isRedirect)
            return (
                <Redirect to={'/'} />
            )

        return (
            <div className="flex-col option">
                <h2 className="option__title ">Select store provider :</h2>
                <div className="form-check option__input flex-center ">
                        <input type="radio" id="radios1"
                        onChange={(e)=> {if (e.target.checked) this.onSelect(SourceTypes.LOCALSTORAGE)}}
                        checked={this.props.selectStorage == SourceTypes.LOCALSTORAGE }/>
                        <label htmlFor={'radios1'}>LocalStorage</label>
                </div>
                <div className="form-check option__input flex-center ">  
                        <input type="radio" id="radios2"
                        onChange={(e)=> {if (e.target.checked) this.onSelect(SourceTypes.FIREBASE)}}
                        checked={this.props.selectStorage == SourceTypes.FIREBASE }/>  
                        <label htmlFor={'radios2'}>FireBase</label>
                </div>
                <div className="wrapButton">
                    <button onClick={this.navigateBack} className="btn btn-md btn-secondary ">Apply</button>
                </div>
            </div>
        );
    }
}
export default SourceList; 
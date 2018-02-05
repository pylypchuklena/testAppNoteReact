import * as React from 'react'
import { NoteModel } from '../types/NoteModel';

export interface itemProps {
    selectedItem: NoteModel;
    updateNote: (item: NoteModel) => void;
}

export class NoteContent extends React.Component<itemProps>{

    constructor(props: itemProps) {
        super(props);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(e: any) {
        this.props.updateNote({ ...this.props.selectedItem, name: e });
    }

    handleChangeContent(e: any) {
        this.props.updateNote({ ...this.props.selectedItem, content: e });
    }

    handleSubmit(e: any) {
        e.preventDeault();
    }

    render() {
        if (this.props.selectedItem) {

            return (
                <form onSubmit={(e) => this.handleSubmit(e.preventDefault())}>
                    <div className="note__header">
                        <label className="flex-row">
                            <input type="text"
                                placeholder="Title"
                                value={this.props.selectedItem.name}
                                onChange={(e) => this.handleChangeTitle(e.target.value)} />
                        </label>
                    </div>
                    <div className="note__content">
                        <textarea
                            value={this.props.selectedItem.content}
                            onChange={(e) => this.handleChangeContent(e.target.value)}>
                        </textarea>
                    </div>
                </form>
            )
        }
        else return (<div></div>)
    }

}

export default NoteContent;
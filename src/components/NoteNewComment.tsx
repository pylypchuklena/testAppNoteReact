import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';

interface Props {
    onAddComment?: (comment: NoteComment) => void
}

interface State {
    authorValid: boolean,
    valueAuthor: string,
    valueComment: string
}

export class NoteNewComment extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = { authorValid: false, valueAuthor: '', valueComment: '' };
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.clearTextInput = this.clearTextInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    validateAuthor(str: string): boolean {
        var arr = str.split(" ");
        if (arr.length == 2) {
            var first = arr[0].charAt(0) == arr[0].charAt(0).toLocaleUpperCase();
            var second = arr[1].charAt(0) == arr[1].charAt(0).toLocaleUpperCase() && arr[1].length > 0;
            return first && second;
        }
    }

    handleAuthor(e: any) {
        this.setState(
            {
                authorValid: this.validateAuthor(e.currentTarget.value),
                valueAuthor: e.currentTarget.value
            });
    }
    handleContent(e: any) {
        this.setState({
            valueComment: e.currentTarget.value
        });
    }
    clearTextInput() {
        this.setState({ ...this.state, valueComment: '', valueAuthor: '', authorValid:false });
    }
    submitForm(e: any) {
        e.preventDefault();
        if (this.state.authorValid) {
            var newComment = new NoteComment();
            newComment.author = this.state.valueAuthor;
            newComment.content = this.state.valueComment;
            this.props.onAddComment(newComment);
            this.clearTextInput()
        }
    }

    render() {
        return (
            <div className="newComment newComment-wrap">
                <form className="form"
                    onSubmit={this.submitForm}>
                    <div className="form__inputs">
                        <div className="form-group">
                            <label htmlFor="newCommentName"  >Author:</label>
                            <input id="newCommentName"
                                onChange={this.handleAuthor}
                                value={this.state.valueAuthor}
                                type="text"
                                className={"form-control form__input " +
                                    (this.state.authorValid ? 'isValid' : 'inValid')} />
                                    <small className={"form-text text-muted " + (this.state.authorValid ? "hide" :"Show")}>* Name and Surname </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="newCommentContent" >Content:</label>
                            <textarea required id="newCommentContent"
                                value={this.state.valueComment}
                                onChange={this.handleContent}
                                className={"form-control form__input " +
                                (this.state.authorValid ? 'isValid' : 'inValid')} ></textarea>
                        </div>

                    </div>
                    <button type="submit"
                        className="btn btn-md btn-secondary mr-sm-2">Add comment</button>
                    
                </form>
            </div>
        );
    }
}
export default NoteNewComment;
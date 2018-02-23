import * as React from "react";
import { NoteModel, NoteComment } from '../types/NoteModel';

interface Props {
    onAddComment?: (comment: NoteComment) => void
}

interface State {
    valueAuthor: string,
    valueComment: string
}

export class NoteNewComment extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = { valueAuthor: '', valueComment: '' };
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.clearTextInput = this.clearTextInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleAuthor(e: any) {
        this.setState(
            {
                valueAuthor: e.currentTarget.value
            });
    }
    handleContent(e: any) {
        this.setState({
            valueComment: e.currentTarget.value
        });
    }
    clearTextInput() {
        this.setState({ ...this.state, valueComment: '', valueAuthor: ''});
    }
    submitForm(e: any) {
        e.preventDefault();
            var newComment = new NoteComment();
            newComment.author = this.state.valueAuthor;
            newComment.content = this.state.valueComment;
            this.props.onAddComment(newComment);
            this.clearTextInput()
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
                                required
                                onChange={this.handleAuthor}
                                value={this.state.valueAuthor}
                                type="text"
                                className="form-control form__input " />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newCommentContent" >Content:</label>
                            <textarea required id="newCommentContent"
                                value={this.state.valueComment}
                                onChange={this.handleContent}
                                className="form-control form__input " ></textarea>
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
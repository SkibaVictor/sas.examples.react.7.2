import React from 'react';
import { addNewsActionCreator, updateNewsDataActionCreator } from '../../store/store';

class AddNews extends React.Component {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.contentRef = React.createRef();
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange() {
        var action = updateNewsDataActionCreator(this.titleRef.current.value,
            this.contentRef.current.value);
        this.props.dispatch(action);
    }
    handleSubmit(e) {
        e.preventDefault();
        var action = addNewsActionCreator();
        this.props.dispatch(action);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="card mb-4 mt-4">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control"
                                value={this.props.title} 
                                onChange={this.onChange}
                                ref={this.titleRef} />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label>Content</label>
                                <input type="text" className="form-control"
                                value={this.props.content} 
                                onChange={this.onChange}
                                ref={this.contentRef} />
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-sm btn-success">Add news</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddNews;


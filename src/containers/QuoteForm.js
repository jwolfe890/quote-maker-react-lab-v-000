import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { addQuotes } from '../actions/quotes';

export class QuoteForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '', 
      author: ''
    }
  }

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({ 
      [name]: value, 
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();

    debugger

    this.state = {
      content: "",
      author: "",
    }
  }

  render() {

    debugger

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea 
                        className="form-control"
                        value={this.state.content}
                        name="content"
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input 
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                        onChange={(event) => this.handleOnChange(event)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addQuotes}, dispatch);
};

export default connect(null, mapDispatchToProps)(QuoteForm);
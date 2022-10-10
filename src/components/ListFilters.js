import React from 'react';

import '../css/ListFilters.css';

class ListFilters extends React.Component {
  state = {
    sort: 'title',
    status: '',
    type: ''
  }

  render() {
    return(
      <div className="list-filters">

        <div className="form-group list-filters__form-group">
          <label htmlFor="sort">Sort</label>
          <select name="sort"
                  className="form-control"
                  value={this.state.sort}
                  onChange={e => {
                    this.setState({ sort: e.target.value })
                    this.props.onSortChange(e.target.value);
                  }}>
            <option value="title">Title</option>
            <option value="column">Status</option>
            <option value="type">Type</option>
          </select>
        </div>

        <div className="form-group list-filters__form-group">
          <label htmlFor="status">Status</label>
          <select name="status"
                  className="form-control"
                  value={this.state.status}
                  onChange={e => {
                    this.setState({ status: e.target.value })
                    this.props.onStatusChange(e.target.value);
                  }}>
            <option value="">Select Status</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="review">Review</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="form-group list-filters__form-group">
          <label htmlFor="type">Type</label>
          <select name="type"
                  className="form-control"
                  value={this.state.type}
                  onChange={e => {
                    this.setState({ type: e.target.value })
                    this.props.onTypeChange(e.target.value);
                  }}>
            <option value="">Select Type</option>
            <option value="task">Task</option>
            <option value="feature">Feature</option>
            <option value="bug">Bug</option>
          </select>
        </div>

      </div>
    );
  }

}

export default ListFilters;
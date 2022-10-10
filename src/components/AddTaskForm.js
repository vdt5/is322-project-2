import React from 'react';

class AddTaskForm extends React.Component {
  state = {
    title: '',
    type: 'task'
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      title: this.state.title,
      type: this.state.type
    });
  }

  render() {
    return (
      <div className="add-task-form">
        <h3>Add Task</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group add-task-form__form-group">
            <label htmlFor="title">Title</label>
            <input type="text"
                   className="form-control"
                   value={this.state.title}
                   onChange={e => this.setState({ title: e.target.value })} />
          </div>

          <div className="form-group add-task-form__form-group">
            <label htmlFor="type">Type</label>
            <select name="type"
                    className="form-control"
                    value={this.state.type}
                    onChange={e => this.setState({ type: e.target.value })}>
              <option value="">Select Type</option>
              <option value="task">Task</option>
              <option value="feature">Feature</option>
              <option value="bug">Bug</option>
            </select>
          </div>

          <input type="submit" className="btn btn-success" value="Add Task" />
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
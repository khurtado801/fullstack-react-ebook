/**
 * React component using an ES6 class that extends the class React.Component
 * Render is the only required method for a React component
 * React uses the return value from this method to determine what to render to the page
 */
class TimerDashboard extends React.Component {
    render() {
        console.log('TimerDashboard');
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    }
}

class EditableTimerList extends React.Component {
    render() {
        console.log('EditableTimerList');
        return (
            <div id='timers'>
                <EditableTimer
                    title='Learn React'
                    project='Web Domination'
                    elapsed='8986300'
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title='Learn Extreme Ironing'
                    project='World Domination'
                    elapsed='3890985'
                    runningSince={null}
                    editFormOpen={true}
                />
            </div>
        )
    }
}

class EditableTimer extends React.Component {
    render() {
        console.log('EditableTimer');
        if (this.props.editFormOpen) {
            return (
                <TimerForm 
                    title={this.props.title}
                    project={this.props.project}
                />
            );
        } else {
            return (
                <Timer 
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            );
        }
    }
}

class TimerForm extends React.Component {
    render() {
        const submitText = this.props.title ? 'Update' : 'Create';

        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='ui form'>
                        <div className='field'>
                            <label>Title</label>
                            <input type='text' defaultValue={this.props.title} />
                        </div>
                        <div className='field'>
                            <label>Project</label>
                            <input type='text' defaultValue={this.props.project} />
                        </div>
                        <div className='ui two button attached buttons'>
                            <button className='ui basic blue button'>
                                {submitText}
                            </button>
                            <button className='ui basic red button'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ToggleableTimerForm extends React.Component {
    render() {
        console.log('ToggleableTimerForm');
      if (this.props.isOpen) {
        return (
          <TimerForm />
        );
      } else {
        return (
          <div className='ui basic content center aligned segment'>
            <button className='ui basic button icon'>
              <i className='plus icon' />
            </button>
          </div>
        );
      }
    }
}

class Timer extends React.Component {
    render() {
        const elapsedString = helpers.renderElapsedString(this.props.elapsed);

        return (
            <div className='ui centered card'>
                <div className='content'>
                    <div className='header'>
                        {this.props.title}
                    </div>
                    <div className='meta'>
                        {this.props.project}
                    </div>
                    <div className='center aligned description'>
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className='extra content'>
                        <span className='right floated edit icon'>
                            <i className='edit icon' />
                        </span>
                        <span className='right floated trash icon'>
                            <i className='trash icon' />
                        </span>
                    </div>
                </div>
                <div className='ui bottom attached blue basic button'>
                    Start
                </div>
            </div>
        );
    }
}

/**
 * ReactDOM has two arguements passed in
 * The first arguement is what we want to render
 * The second arguement is where we want to render it
 */
ReactDOM.render(
    <TimerDashboard />,
    document.getElementById('content')
);
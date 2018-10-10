/**
 * React component using an ES6 class that extends the class React.Component
 * Render is the only required method for a React component
 * React uses the return value from this method to determine what to render to the page
 */
class TimerDashboard extends React.Component {
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <p>Test</p>
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    }
}

class ToggleableTimerForm extends React.Component {
    render() {
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

class EditableTimerList extends React.Component {
    render() {
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

/**
 * ReactDOM has two arguements passed in
 * The first arguement is what we want to render
 * The second arguement is where we want to render it
 */
ReactDOM.render(
    <TimerDashboard />,
    document.getElementById('content')
);
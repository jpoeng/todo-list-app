var TodoList = React.createClass({
  getInitialState: function() {
    return {
      tasks: [
        'Email Bob',
        'Call Jane',
        'Send project proposal',
        'Practice pitch'
      ]
    };
  },

  render: function() {
    return (
      <div>
        {this.state.tasks.map(function(task){
          return (
            <li>{task}</li>
            );
        })}
      </div>
      );
  }
});
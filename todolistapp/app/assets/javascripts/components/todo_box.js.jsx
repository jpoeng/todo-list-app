var TodoBox = React.createClass({
  render: function(){
    return (
      <div>
      <h1>This is my Todo List</h1>
      <TodoList />
      <TodoForm />
      </div>
      );
  }
});
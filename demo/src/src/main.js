function getTodoApp(mountNode){
    ReactDOM.render(<TodoApp />, mountNode);
}
$(function(){
  //  getTodoApp( document.getElementById('message'));
    ReactDOM.render(<TodoApp />, document.getElementById('message'));
});

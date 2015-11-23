'use strict';

function getTodoApp(mountNode) {
    ReactDOM.render(React.createElement(TodoApp, null), mountNode);
}
$(function () {
    //  getTodoApp( document.getElementById('message'));
    ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('message'));
});
'use strict';

var Counter = React.createClass({
    displayName: 'Counter',

    getInitialState: function getInitialState() {
        return { clickCount: 0 };
    },
    handleClick: function handleClick() {
        this.setState(function (state) {
            return { clickCount: state.clickCount + 1 };
        });
    },
    render: function render() {
        return React.createElement(
            'h2',
            { onClick: this.handleClick },
            'Click me! Number of clicks: ',
            this.state.clickCount
        );
    }
});

ReactDOM.render(React.createElement(Counter, null), document.getElementById('message'));
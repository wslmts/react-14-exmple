'use strict';

var Todo = React.createClass({
    displayName: 'Todo',

    render: function render() {
        return React.createElement(
            'div',
            { onClick: this.props.onClick },
            this.props.title
        );
    },

    //this component will be accessed by the parent through the `ref` attribute
    animate: function animate() {
        console.log('Pretend %s is animating', this.props.title);
    }
});

var Todos = React.createClass({
    displayName: 'Todos',

    getInitialState: function getInitialState() {
        return { items: ['Apple', 'Banana', 'Cranberry'] };
    },

    handleClick: function handleClick(index) {
        var items = this.state.items.filter(function (item, i) {
            return index !== i;
        });
        console.log("items", items);
        this.setState({ items: items }, (function () {
            if (items.length === 1) {
                this.refs.item.animate();
            }
        }).bind(this));
    },

    render: function render() {
        return React.createElement(
            'div',
            null,
            this.state.items.map(function (item, i) {
                var boundClick = this.handleClick.bind(this, i);
                return React.createElement(Todo, { onClick: boundClick, key: i, title: item, ref: 'item' + i });
            }, this)
        );
    }
});

ReactDOM.render(React.createElement(Todos, null), document.getElementById('message'));
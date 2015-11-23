"use strict";

var data = [{ author: "Peter Hunt", text: "This is one comment" }, { author: "Jordan Walke", text: "This is *another* comment" }];
var CommentBox = React.createClass({
    displayName: "CommentBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentBox" },
            React.createElement(
                "h1",
                null,
                "Comments"
            ),
            React.createElement(CommentList, { data: this.props.data }),
            React.createElement(CommentForm, null)
        );
    }
});

var CommentList = React.createClass({
    displayName: "CommentList",

    render: function render() {
        var commentNodes = this.props.data.map(function (comment) {
            return React.createElement(
                Comment,
                { author: comment.author },
                comment.text
            );
        });
        return React.createElement(
            "div",
            { className: "commentList" },
            commentNodes
        );
    }
});

var CommentForm = React.createClass({
    displayName: "CommentForm",

    render: function render() {
        return React.createElement(
            "form",
            { className: "commentForm" },
            React.createElement("input", { type: "text", placeholder: "Your name" }),
            React.createElement("input", { type: "text", placeholder: "Say something..." }),
            React.createElement("input", { type: "submit", value: "Post" })
        );
    }
});

var Comment = React.createClass({
    displayName: "Comment",

    render: function render() {
        return React.createElement(
            "div",
            { className: "comment" },
            React.createElement(
                "h2",
                { className: "commentAuthor" },
                this.props.author
            ),
            this.props.children
        );
    }
});
ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById('message'));
"use strict";

var CommentBox = React.createClass({
    displayName: "CommentBox",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentBox" },
            React.createElement(CommentList, null),
            React.createElement(CommentForm, null)
        );
    }
});
var CommentList = React.createClass({
    displayName: "CommentList",

    render: function render() {
        return React.createElement(
            "div",
            { className: "commentList" },
            React.createElement(
                Comment,
                { author: "Mordan Walke", tel: "15311099902" },
                "This is *another* comment"
            ),
            React.createElement(
                Comment,
                { author: "Pete Hunt", tel: "13011099902" },
                "This is one comment",
                React.createElement(
                    "span",
                    null,
                    "(welcome)"
                )
            ),
            React.createElement(
                Comment,
                { author: "Jordan Walke", tel: "15011099902" },
                React.createElement(
                    "div",
                    null,
                    "This is *another* comment"
                )
            )
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
                this.props.author,
                "-",
                this.props.tel
            ),
            this.props.children
        );
    }
});
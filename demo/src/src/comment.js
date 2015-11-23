var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <CommentList/>
                <CommentForm/>
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Mordan Walke" tel="15311099902">This is *another* comment</Comment>
                <Comment author="Pete Hunt" tel="13011099902">This is one comment<span>(welcome)</span></Comment>
                <Comment author="Jordan Walke" tel="15011099902"><div>This is *another* comment</div></Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say something..." />
                <input type="submit" value="Post" />
            </form>
        );
    }
});
var Comment = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}-{this.props.tel}
                </h2>
                {this.props.children}
            </div>
        );
    }
});
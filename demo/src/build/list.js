"use strict";

var MenuBox = React.createClass({
    displayName: "MenuBox",

    render: function render() {
        return React.createElement(MenuList, { menuList: this.props.menus });
    }
});
var MenuList = React.createClass({
    displayName: "MenuList",

    render: function render() {
        var subList = this.props.menuList.map(function (meuns, i) {
            return React.createElement(Menu, { key: i, mtitle: meuns.parent, menulists: meuns.kids });
        });
        return React.createElement(
            "div",
            null,
            subList
        );
    }
});
var Menu = React.createClass({
    displayName: "Menu",

    handleClick: function handleClick(e) {
        console.log("parents");
    },
    render: function render() {
        var list = this.props.menulists.map(function (menu, i) {
            var boundClick = this.handleClick.bind(this, i);
            return React.createElement(Menutext, { onClick: boundClick, text: menu.text, key: i, id: menu.id });
        }, this);

        return React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                null,
                this.props.mtitle.text
            ),
            React.createElement(
                "div",
                null,
                list
            )
        );
    }
});
var Menutext = React.createClass({
    displayName: "Menutext",

    getInitialState: function getInitialState() {
        console.log("initial");
        return { checked: "" };
    },
    handleClick: function handleClick(e) {
        $("#content").html($(e.target).text());
        this.setState({ checked: e.target.getAttribute('data-id') });
        this.ref = e.target;
    },
    componentDidMount: function componentDidMount() {
        console.log("mount");
        var self = this;
        $("li").on("click", function (e) {
            $("li").removeClass("checked");
            $(e.target).addClass("checked");
        });
    },
    log: function log() {
        console.log("child", this.props.text);
    },
    render: function render() {
        var selected = this.props.id == this.state.checked ? 'checked' : '';
        return React.createElement(
            "li",
            { onClick: this.handleClick, "data-id": this.props.id, className: selected },
            this.props.text
        );
    }
});
var data = [{
    parent: { text: "我的招聘", id: "1" },
    kids: [{ text: "招聘首页1", id: "1-1" }, { text: "公司管理", id: "1-2" }, { text: "人才库管理", id: "1-3" }, { text: "职位管理", id: "1-4" }, { text: "简历管理", id: "1-5" }]
}, {
    parent: { text: "职位管理", id: "2" },
    kids: [{ text: "招聘首页2", id: "2-1" }, { text: "公司管理", id: "2-2" }, { text: "人才库管理", id: "2-3" }, { text: "职位管理", id: "2-4" }, { text: "简历管理", id: "2-5" }]
}, {
    parent: { text: "简历管理", id: "3" },
    kids: [{ text: "招聘首页3", id: "3-1" }, { text: "公司管理", id: "3-2" }, { text: "人才库管理", id: "3-3" }, { text: "职位管理", id: "3-4" }, { text: "简历管理", id: "3-5" }]
}];
ReactDOM.render(React.createElement(MenuBox, { menus: data }), document.getElementById("message"));
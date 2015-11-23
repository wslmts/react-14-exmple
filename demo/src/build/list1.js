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

    getInitialState: function getInitialState() {
        console.log("initial");
        return { checked: "", last: null };
    },
    handleClick: function handleClick(e) {
        $("#content").html($(e.target).text());
        this.setState({ 'checked': e.target.getAttribute('data-id'), last: e.target });
        $(this.state.last).removeClass('checked');
        $(e.target).addClass('checked');
    },

    render: function render() {
        var self = this;
        var list = this.props.menulists.map(function (menu, i) {
            var selected = menu.id == self.state.checked ? 'checked' : '';
            return React.createElement(
                "li",
                { onClick: self.handleClick, key: i, "data-id": menu.id, className: selected },
                menu.text
            );
        });

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
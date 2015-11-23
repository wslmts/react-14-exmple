"use strict";

define(function (require, exports, module) {
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

        render: function render() {
            var list = this.props.menulists.map(function (menu, i) {
                return React.createElement(Menutext, { text: menu.text, key: i });
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
    var Menutext = React.createClass({
        displayName: "Menutext",

        handleClick: function handleClick(e) {
            // $("#content").html($(e.target).text())
            /*$("#content").load("plain.html",function(){
               $(this).html($(e.target).text());
            });*/
            $("#content").load("plain.html #target");
        },
        render: function render() {
            return React.createElement(
                "li",
                { onClick: this.handleClick },
                this.props.text
            );
        }
    });
    var data = [{
        parent: { text: "我的招聘" },
        kids: [{ text: "招聘首页1" }, { text: "公司管理" }, { text: "人才库管理" }, { text: "职位管理" }, { text: "简历管理" }]
    }, {
        parent: { text: "职位管理" },
        kids: [{ text: "招聘首页2" }, { text: "公司管理" }, { text: "人才库管理" }, { text: "职位管理" }, { text: "简历管理" }]
    }, {
        parent: { text: "简历管理" },
        kids: [{ text: "招聘首页3" }, { text: "公司管理" }, { text: "人才库管理" }, { text: "职位管理" }, { text: "简历管理" }]
    }];
    function drawMenu(node) {
        ReactDOM.render(React.createElement(MenuBox, { menus: data }), node);
    }
    return {
        drawMenu: drawMenu
    };
    //module.exports=DrawMenu;
});
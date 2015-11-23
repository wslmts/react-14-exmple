define(function(require, exports, module){
    var MenuBox=React.createClass({
        render:function(){
            return   <MenuList  menuList={this.props.menus}/>
        }
    });
    var MenuList=React.createClass({
        render:function(){
            var subList=this.props.menuList.map(function(meuns,i){
                return  <Menu key={i} mtitle={meuns.parent} menulists={meuns.kids}/>
            })
            return  (
                <div>{subList}</div>
            )
        }
    });
    var Menu=React.createClass({
        render:function(){
            var list=this.props.menulists.map(function(menu,i){
                return <Menutext  text={menu.text} key={i}/>
            });

            return  (
                <div>
                    <h3>{this.props.mtitle.text}</h3>
                    <div>{list}</div>
                </div>
            )
        }
    });
    var Menutext=React.createClass({
        handleClick:function(e){
           // $("#content").html($(e.target).text())
            /*$("#content").load("plain.html",function(){
               $(this).html($(e.target).text());
            });*/
            $("#content").load("plain.html #target");
        },
        render:function(){
            return  (
                <li onClick={this.handleClick}>{this.props.text}</li>
            )
        }
    });
    var data = [
        {
            parent: {text: "我的招聘"},
            kids: [{text: "招聘首页1"},
                {text: "公司管理"},
                {text: "人才库管理"},
                {text: "职位管理"},
                {text: "简历管理"}]
        },
        {
            parent: {text: "职位管理"},
            kids: [{text: "招聘首页2"},
                {text: "公司管理"},
                {text: "人才库管理"},
                {text: "职位管理"},
                {text: "简历管理"}]
        },
        {
            parent: {text: "简历管理"},
            kids: [{text: "招聘首页3"},
                {text: "公司管理"},
                {text: "人才库管理"},
                {text: "职位管理"},
                {text: "简历管理"}]
        }
    ];
    function drawMenu(node){
        ReactDOM.render(<MenuBox menus={data}/>,node);
    }
    return {
        drawMenu:drawMenu
    }
    //module.exports=DrawMenu;

})

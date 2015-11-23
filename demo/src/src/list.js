
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
    handleClick:function(e){
       console.log("parents")
    },
    render:function(){
        var list=this.props.menulists.map(function(menu,i){
            var boundClick = this.handleClick.bind(this, i);
            return <Menutext onClick={boundClick} text={menu.text} key={i} id={menu.id}/>
        },this);

        return  (
            <div>
                 <h3>{this.props.mtitle.text}</h3>
                 <div>{list}</div>
            </div>
        )
    }
});
var Menutext=React.createClass({
    getInitialState:function(){
        console.log("initial");
        return {checked:""}
    },
    handleClick:function(e){
       $("#content").html($(e.target).text())
        this.setState({checked: e.target.getAttribute('data-id')});
        this.ref=e.target;
    },
    componentDidMount:function(){
        console.log("mount");
        var self=this;
        $("li").on("click",function(e){
             $("li").removeClass("checked");
             $(e.target).addClass("checked");
         })

    },
    log:function(){
      console.log("child",this.props.text);
    },
    render:function(){
        var selected = this.props.id == this.state.checked ? 'checked' : '';
        return  (
            <li onClick={this.handleClick} data-id={this.props.id} className={selected}>{this.props.text}</li>
        )
    }
});
var data = [
    {
        parent: {text: "我的招聘",id:"1"},
        kids: [{text: "招聘首页1",id:"1-1"},
            {text: "公司管理",id:"1-2"},
            {text: "人才库管理",id:"1-3"},
            {text: "职位管理",id:"1-4"},
            {text: "简历管理",id:"1-5"}]
    },
    {
        parent: {text: "职位管理",id:"2"},
        kids: [{text: "招聘首页2",id:"2-1"},
            {text: "公司管理",id:"2-2"},
            {text: "人才库管理",id:"2-3"},
            {text: "职位管理",id:"2-4"},
            {text: "简历管理",id:"2-5"}]
    },
    {
        parent: {text: "简历管理",id:"3"},
        kids: [{text: "招聘首页3",id:"3-1"},
            {text: "公司管理",id:"3-2"},
            {text: "人才库管理",id:"3-3"},
            {text: "职位管理",id:"3-4"},
            {text: "简历管理",id:"3-5"}]
    }
];
ReactDOM.render(<MenuBox menus={data} />,document.getElementById("message"));

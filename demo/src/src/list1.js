
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
    getInitialState:function(){
        console.log("initial");
        return {checked:"",last:null}
    },
    handleClick:function(e){
        $("#content").html($(e.target).text())
        this.setState({'checked': e.target.getAttribute('data-id'),last:e.target});
        $(this.state.last).removeClass( 'checked');
        $(e.target).addClass( 'checked');
    },

    render:function(){
        var self=this;
        var list=this.props.menulists.map(function(menu,i){
           var selected = menu.id == self.state.checked ? 'checked' : '';
           return   <li onClick={self.handleClick} key={i} data-id={menu.id} className={selected}>{menu.text}</li>
        });

        return  (
            <div>
                 <h3>{this.props.mtitle.text}</h3>
                 <div>{list}</div>
            </div>
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

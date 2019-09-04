//模拟后台传过来的数据
var arr = ["马超","曜","云中君","瑶","盘古","猪八戒",
"嫦娥","上官婉儿","李信","沈梦溪","伽罗","盾山","司马懿",
"孙策","元歌","米莱狄","狂铁","弈星","裴擒虎","杨玉环",
"公孙离","明世隐","女娲","梦奇","苏烈","百里玄策","百里守约","铠"];
var arrLen = arr.length; //遍历arr的数组
//获取
var oList = document.getElementsByClassName('list')[0];
var oBtn = document.getElementsByClassName('btn')[0];
var timer;
var index;

// 循环遍历产生带数据的li标签
function init() {
    var str = '';
    // 循环遍历产生li
    arr.forEach(function (ele,index){
        str +='<li>' + ele + '</li>';
    });
    oList.innerHTML = str;
}
init();

var flag = false;
// 点击事件
oBtn.onclick =function() {
    if( document.getElementsByClassName('end')[0]) {
        document.getElementsByClassName('end')[0].className = '';
    }
    flag = !flag;
    if(flag){
        oBtn.innerHTML = '停止';
        timer = setInterval(function() {
            randomName();
            
        },100);
        
    }else{
        clearInterval(timer);
        oBtn.innerHTML = '点名';
        alert(arr[index])
    }
};

function randomName() {
    // 产生随机数
    index = Math.floor(Math.random()*arrLen); 
    
    // 测试代码
    console.log(index);
    
    if(document.getElementsByClassName('active')[0]){
        document.getElementsByClassName('active')[0].className = '';
    }
    oList.getElementsByTagName('li')[index].className = 'active';
    
}
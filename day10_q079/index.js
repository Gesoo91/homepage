const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;

function login(){
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        // alert("로그인 성공");
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin(){
    loginBox.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}
var currenttime;
window.onload = function(){
    i=document.getElementById("i");
    p=document.getElementById("p");
    loginBox=document.getElementById("login_box");
    currenttime = document.getElementById("timenow")
    // time_in(); //이걸 안넣어서 함수가 적용되지않고있었다.
    init()
}



// document.write("현재 시간은 :" + now.getFullYear()+"년"+(now.getMonth()+1)+"월"+now.getDate()+"일"+now.toLocaleTimeString()+"초"+now.getMilliseconds()); br();
// var year = now.getFullYear()+"년"
// var month = (now.getMonth()+1)+"월"
// var date = now.getDate()+"일"
// var timeString = now.toLocaleTimeString()
// var millisec = now.getMilliseconds()
// var day = now.getDay()


// currenttime = document.getElementById("timenow");
// var time_in = currenttime.innerHTML;
function time_in(){
    var now = new Date(); // 이걸 함수 밖에 두고 interval을 주니 변화가 없음. 이함수를 반복시켜야 시간을 계속 받아오니 안에다 넣어야한다.
    var year = now.getFullYear() + "년";
    var month = (now.getMonth() + 1) + "월";
    var date = now.getDate() + "일";
    // var timeString = now.toLocaleTimeString();
    var hours = now.getHours() +":";
    if(hours<10){
        hours = "0"+hours;
    }
    var minutes = now.getMinutes()+":";
    if(minutes<10){
        minutes = "0"+minutes;
    }
    var seconds = now.getSeconds();
    if(seconds<10){
        seconds = "0"+seconds;
    }
    // var millisec = now.getMilliseconds();
    var day = "&nbsp"+now.getDay();
    if(day == 0){
        day = "일요일";
    }
    else if(day == 1){
        day = "월요일";
    }
    else if(day == 2){
        day = "화요일";
    }
    else if(day == 3){
        day = "수요일";
    }
    else if(day == 4){
        day = "목요일";
    }
    else if(day == 5){
        day = "금요일";
    }
    else {
        day = "토요일";
    }
    now_date = year+month+date+day;
    time = hours+minutes+seconds;
    currenttime.innerText = now_date + time;
}
function init(){
    time_in();
    setInterval(time_in, 1000);
}
console.log(init)
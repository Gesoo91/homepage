
var str_id = "";
var str_pw = "";

var login_box;
var input_id;
var input_pw;
window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


    login_box = document.getElementById("loginBox");
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    currenttime = document.getElementById("timenow")
    // time_in(); //이걸 안넣어서 함수가 적용되지않고있었다.
    init()
//todo

    // str_id = input_id.value;
    // str_pw = input_pw.value;

    

}
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

function login(){
    var local_id = input_id.value;
    var local_pw = input_pw.value; // 이것들을 로그인 함수 밖에 두면 무조건 실패라고 나온다. 왜?

    // alert("id:"+str_id+" pw:"+str_pw);
    // alert("id:"+input_id.value+" pw:"+input_pw.value);
    // console.log("id:"+input_id.value+"pw:"+input_pw.value)
    if(local_id == "cat" && local_pw == "1234"){
        alert("로그인 성공");
       /*
        input_id.value = local_id+"회원님 반갑습니다."; //인풋 아이디는 인풋요소를 가져오는데 이것은 택스트입력 필드라서 innerhtml을 사용해서 html변경을 할수가 없다. 
        // 따라서 input_id.value를 사용해서 값을 변경하면 된다.
        */
       login_box.innerHTML = local_id+"회원님 반갑습니다."; //혹은 input이 아닌 div상자 전체를 바꿔버리자.
    }else{
        alert("로그인 실패");
    }
}
function registerUser(){
    
}


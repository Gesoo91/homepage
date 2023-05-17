
var str_id = "";
var str_pw = "";

var login_box;
var input_id;
var input_pw;
window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


    login_box = document.getElementById("loginBox");
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
//todo

    // str_id = input_id.value;
    // str_pw = input_pw.value;

    

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
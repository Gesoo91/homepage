window.onload = function(){
    ipid = document.getElementById("id"); // var로 변수선언하는거 아님
    ippassword = document.getElementById("password")
    ippasswordChecker = document.getElementById("passwordCheck")
    ipname = document.getElementById("name")
    ipemail = document.getElementById("eMail")
    ipdate = document.getElementById("date")
    ipgender = document.getElementsByName("sex")
    ipphoneNumber1 = document.getElementById("phoneNumber1")
    ipphoneNumber2 = document.getElementById("phoneNumber2")
    ipphoneNumber3 = document.getElementById("phoneNumber3")
}
function registClick() {
    id = ipid.value;
    password = ippassword.value;
    passwordChecker = ippasswordChecker.value;
    username = ipname.value;
    email = ipemail.value;
    
    for(var i=1; i<ipgender; i++){
        // ipgender[i] 의 checked 멤버 변수에 해당 radio 가 체크된 상태면 true 가 리턴되므로 둘다 true 면 체크상태라는 뜻
        if(ipgender[i].checked == true){
            gender = ipgender[i].value;
        }
    }

    function idCheck(){
        if (id.length >= 4 && id.length <= 12) {
            console.log("ok id");
            return true;
        }
        else {
            alert("id는 4글자 이상 12글자 이하로 해주세요.");
            console.log("no id");
            return false;
        }
    }
    
    function passwordLengthCheck() {
        if (password.length >= 4 && password.length <= 16) {
            console.log("ok ps");
            return true;
        }
        else {
            alert("비밀번호는 4글자 이상 16글자 이하로 해주세요.");
            console.log("no ps");
            return false;
        }
    }
    function passwordCheck() {
        if (password == passwordChecker) {
            console.log("ok psC");
            return true;
        }
        else {
            alert("비밀번호가 서로 다릅니다.");
            console.log("no psC");
            return false;
        }
    }
    function userNameCheck(){
        if(username.length >=2 && username.length <=5){
            console.log("ok name");
            return true;
        }
        else {
            alert("성함은 2글자 이상 5글자 이하로 해주세요.");
            console.log("no name");
            return false;
        }
    }
    function emailCheck(){
        if(email.length >=4 && email.length <=20){
            console.log("ok email");
            return true
        }
        else{
            alert("이메일은 4글자 이상 20글자 이하로 해주세요.");
            console.log("no email");
            return false;
        }
    }

    if(idCheck() && passwordCheck() && passwordLengthCheck() && userNameCheck() && emailCheck()){
        alert("회원가입을 축하합니다.")
    }
    else{
        alert("회원가입 실패")
    }
}

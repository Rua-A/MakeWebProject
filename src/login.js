const mainpage = document.getElementById("map");
const loginBtn = document.getElementById("login-button");
const wrapper = document.querySelector(".wrapper");
const closeBtns = document.querySelectorAll(".icon-close");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

// active_popup은 로그인 페이지의 활성화 여부, active는 회원가입 링크의 활성화 여부를 체크
let active_popup = false;
let active = false;

//로그인 버튼을 눌렀을 경우
loginBtn.addEventListener("click", ()=>{
    //로그인 페이지가 활성화 되지 않았을 경우
    if(active_popup == false){
        // 회원가입 링크가 활성화 되어있는 경우 먼저 체크
        active = false;
        wrapper.classList.remove("active");
        // 활성화
        active_popup = true;
        wrapper.classList.add("active-popup");
    } else{
        // 로그인 페이지가 활성화되어있는 경우
        // 비활성화
        active_popup = false;
        wrapper.classList.remove("active-popup");
    }
});

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", ()=> {
        active_popup = false;
        wrapper.classList.remove("active-popup");
    });
});


mainpage.addEventListener("click", function(event) {
    // 로그인 창 이외의 영역을 클릭하면
    if (active_popup == true && event.target !== wrapper && event.target !== loginBtn) {
        // 로그인 창을 닫습니다.
        active_popup = false;
        wrapper.classList.remove("active-popup");
      }
});

//회원가입 링크를 눌렀을 경우
registerLink.addEventListener("click", () => {
    active = true;
    wrapper.classList.add("active");
});
//로그인 링크를 눌렀을 경우
loginLink.addEventListener("click", () => {
    active = false;
    wrapper.classList.remove("active");
});

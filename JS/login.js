/*function passwordToggle() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
        document.querySelector('.text').classList.add('open');
        document.querySelector('.password').classList.remove('open');
    } else {
        x.type = "password";
        document.querySelector('.text').classList.remove('open');
        document.querySelector('.password').classList.add('open');
    }
}
let showBtn = document.querySelectorAll('.password-input img');
showBtn.forEach((ele)=>{
    ele.addEventListener('click', passwordToggle);
})
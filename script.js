let btnup = document.querySelector('.btn-up')
let btnsetting = document.querySelector('.btn-setting')
let btnlanguage = document.querySelector('.btn-language')
let btnprojects = document.getElementById('btnprojects');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

document.querySelectorAll(".animate").forEach((el) => observer.observe(el));


btnprojects.onclick = ()=>{
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
};

btnup.onclick = ()=>{
window.scrollTo({
top: 0,
behavior: "smooth" 
});

}
let languages = ["Arabic", "English"];
let language = 0;

btnlanguage.onclick = () => {

    console.log(languages[language]);

    language = (language + 1) % languages.length;
};



btnsetting.onclick = () => {
    btnsetting.style.transform += "rotate(180deg)";
    
if(btnlanguage.style.opacity = 0){
btnlanguage.style.opacity = 1;

}else{
  btnlanguage.style.opacity != 0;

}
  };



onscroll = ()=>{
if(scrollY >= 100){
btnsetting.style.bottom = '70px';
btnup.style.opacity = '1';

}else{
btnsetting.style.bottom = '10px';
btnup.style.opacity = '0';
}
}

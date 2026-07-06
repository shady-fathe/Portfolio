let btnup = document.querySelector('.btn-up')
let btnsetting = document.querySelector('.btn-setting')
let btnlanguage = document.querySelector('.btn-language')
let btnprojects = document.getElementById('btnprojects');
const form = document.getElementById("my-contact-form");
const status = document.getElementById("form-status");

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

// Sending Message  To My Email

const formspreeUrl = "https://formspree.io/f/mkolejor";

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const data = new FormData(form);

  status.style.display = "block";
  status.textContent = "Sending...";
  status.style.color = "blue";

  fetch(formspreeUrl, {
    method: "POST",
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      status.textContent = "Thanks! Your message has been sent successfully.";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "Oops! There was a problem submitting your form.";
      status.style.color = "red";
    }
  })
  .catch(error => {
    status.textContent = "Oops! Network error, please try again.";
    status.style.color = "red";
  });
});

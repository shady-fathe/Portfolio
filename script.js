const form = document.getElementById("my-contact-form");
const status = document.getElementById("form-status");
let btnup = document.querySelector(".btn-up");
let btnsetting = document.querySelector(".btn-setting");
let btnlanguage = document.querySelector(".btn-language");
let btnprojects = document.getElementById("btnprojects");
let nav = document.querySelector("nav");
let logo = document.querySelectorAll(".logo");
let headerText = document.querySelectorAll(".header-a");
let navUl = document.querySelector("nav ul");
let menubtn = document.querySelector(".menu-btn");
let SeOne = document.querySelector(".se-1");
let seOne = document.querySelector(".se-1-content");
let seTwo = document.querySelector(".se-2");
let seSkillsH2 = document.querySelector("#Skills h2");
let seSkillsP = document.querySelector("#Skills p");
let seProjects = document.querySelector("#projects");
let seTimeline = document.querySelector("#Timeline");
let TimelineItem = document.querySelectorAll(".timeline-item");
let seSTATS = document.querySelector(".section-STATS");
let secontact = document.querySelector("#contact");
let titleContacth2 = document.querySelector("#contact h2");
let titleContactP = document.querySelector("#contact p");
let contactInfoTitle = document.querySelector(".contact-info h2");
let ContactItemText = document.querySelectorAll(".contact-item-text");
let footer = document.querySelector("footer");
// function to add calss visible to Elements
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});
document.querySelectorAll(".animate").forEach((el) => observer.observe(el));

// function menu button

// menubtn.addEventListener("click" , ()=>{
// navUl.classList.toggle("navactive")
// console.log("click")
// })

function Fbtnheader() {
  navUl.classList.toggle("navactive");
}

// function to scroll to top
btnup.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// function to show && hide btnup
onscroll = () => {
  if (scrollY >= 100) {
    btnlanguage.style.bottom = "125px";
    btnsetting.style.bottom = "70px";
    btnup.style.opacity = "1";
    btnup.style.pointerEvents = "auto";
  } else {
    btnlanguage.style.bottom = "65px";
    btnsetting.style.bottom = "10px";
    btnup.style.opacity = "0";
    btnup.style.pointerEvents = "none";
  }
};

// function change language
let languages = ["English", "Arabic"];
let language = 0;
btnlanguage.addEventListener("click", () => {
  language += 1;

  if (language == 2) {
    language = 0;
  }
  if (language == 1) {
    btnlanguage.textContent = "EN";
  } else {
    btnlanguage.textContent = "AR";
  }

  // function change language To AR
});
btnlanguage.addEventListener("click", () => {
  if (language == 1) {
    // AR
    nav.style.direction = "rtl";
    SeOne.style.direction = "rtl";
    seOne.style.direction = "rtl";
    seTwo.style.direction = "rtl";
    seProjects.style.direction = "rtl";
    // TimelineItem.style.textalign = "right";
    seSTATS.style.direction = "rtl";
    secontact.style.direction = "rtl";
    footer.style.direction = "rtl";

    // header
    logo.forEach((e) => {
      e.textContent = "معرض ألاعمال.";
    });
    headerText.forEach(() => {
      headerText[0].textContent = "المهارات";
      headerText[1].textContent = "المشاريع";
      headerText[2].textContent = "نبذه عني";
      headerText[3].textContent = "تواصل";
    });

    // section one
    seOne.innerHTML = `
    <div class="se-1-content">

      <h1>
     مرحباً، أنا
        <span class="gradient-text">شادي فتحي </span>
      </h1>

      <h3>مطور واجهات مستخدم (Front-End Web Developer)</h3>

<p>
أقوم بابتكار تجارب 
واجهات مستخدم حديثة وجذابة بصرياً، مع تصميمات مرنة ومتجاوبة، 
ورسوم متحركة سلسة، وتصميمات واجهة ومستخدم (UI/UX) 
نظيفة ومخصصة للشركات الناشئة والعلامات التجارية الرقمية.
</p>
      <div class="se-1-buttons">
        <a href="#" class="btn btn-primary">
          <i class="fa-solid fa-briefcase"></i>
          وظفني
        </a>

        <a href="Shady_Fathe_CV.pdf" class="btn btn-outline">
          <i class="fa-solid fa-download"></i>
          تنزيل السي في 
        </a>

        <a href="#projects" class="btn btn-outline " id="btnprojects">
          <i class="fa-solid fa-code"></i>
          عرض المشاريع
        </a>
      </div>
<!-- btns socials -->
      <div class="socials">

        <a href="https://github.com/shady-fathe"  target="_blank" class="glass">
          <i class="fab fa-github"></i>
        </a>

<a href="https://www.linkedin.com/in/shady-fathe-dev" class="glass" target="_blank" rel="noopener noreferrer">
  <i class="fab fa-linkedin-in"></i>
</a>
        <a href="https://wa.me/+201030263353" class="glass">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
`;
    // section Two  About
    seTwo.innerHTML = `
    <h2 class="section-title">نبذه عني</h2>
    <p class="section-subtitle">
مطور شغوف يركز على إنشاء منتجات رقمية متميزة باستخدام 
التقنيات الحديثة والواجهات المستقبلية.
    </p>
    <div class="about-container">
    <div class="about-d-2">
<div class="about-d-circles">
            <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-code"></i></div>
        </div>
                    <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-display"></i></div>
        </div>
                    <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-layer-group"></i></div>
        </div>
                    <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-bolt"></i></div>
        </div>
</div>
<div class="about-d-2-texts">
    <div class="about-d-2-text glass">
        <span>كود نظيف</span>
        <p>بنية برمجية قابلة للتطوير وحلول سهلة الصيانة.</p>
    </div>
        <div class="about-d-2-text glass">
                <span> تطوير متجاوب</span>
        <p>بناء تجارب مستخدم سلسة تعمل بكفاءة عبر أجهزة
         الكمبيوتر، الأجهزة اللوحية، والهواتف المحمولة.</p>
    </div>
        <div class="about-d-2-text glass">
                      <span> هندسة واجهات حديثة</span>
        <p>صياغة واجهات أنيقة ذات تفاعلات سلسة
         ولمسات جمالية بصرية راقية.</p>
    </div>
        <div class="about-d-2-text glass">
                <span>تسليم سريع</span>
        <p>تقديم حلول عالية الجودة بكفاءة ودون المساس بمستوى الأداء.</p>
    </div>
      </div>
</div>
      <div class="about-card glass">
        <h2>صناعة تجارب ويب حديثة</h2>
        <p>
أنا متخصص في تطوير مواقع ويب أنيقة، قابلة للتطوير،
 وعالية الأداء مع واجهات وتجارب مستخدم (UI/UX) استثنائية. هدفي هو 
 دمج الإبداع مع الهندسة البرمجية النظيفة
  لبناء تجارب مستخدم ممتازة.
        </p>
        <div class="about-info">
          <div class="info-box glass">
            <h3>1.5+</h3>
            <p>سنوات خبرة</p>
          </div>
          <div class="info-box glass">
            <h3>3+</h3>
            <p>مشاريع</p>
          </div>
          <div class="info-box glass">
            <h3>0+</h3>
            <p>عملاء</p>
          </div>
        </div>
      </div>
    </div>
`;
    // section Skills
    seSkillsH2.textContent = " المهارات والتقنيات ";
    seSkillsP.textContent =
      "التقنيات والأدوات التي أستخدمها لإنشاء تجارب رقمية متميزة.";
    // section Projects
    seProjects.innerHTML = `
    <h2 class="section-title">المشاريع المميزة</h2>
    <p class="section-subtitle">
مجموعة من المشاريع الحديثة المتميزة والمنتجات الرقمية.
    </p>
    <div class="projects-grid">
      <div class="project-card glass">
        <div class="project-image">
          <img src="photos/prod-1.WebP"class="blur" loading="lazy">
          <div class="working"><i class="fa-solid fa-gear loop"></i>
                 <p>قريبا</p>
          </div>
        </div>
        <div class="project-content">
          <h3>متجر ملابس</h3>
          <p>
متجر ملابس تفاعلي ومتجاوب بالكامل،
 يتميز بخاصية تصفية المنتجات حسب الفئات، ورسوم متحركة سلسة،
 وتجربة مستخدم حديثة تضمن تصفحاً وتسوقاً سهلاً ودون عناء.

          <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
          <div class="project-buttons">
            <a href="soon.html" target="_blank" class="btn btn-primary">العرض المباشر </a>
            <a href="#"  target="_blank" class="btn btn-outline">جيتهاب</a>
          </div>
        </div>
      </div>

      <div class="project-card glass">
        <div class="project-image">
          <img src="photos/prod-2.WebP"  loading="lazy"></div>
        <div class="project-content">
          <h3>متجر إلكتروني للإكسسوارات</h3>
          <p>
متجر حديث ومتجاوب عبر 
الإنترنت لإكسسوارات الهواتف المحمولة، مصمم لتقديم تجربة
 تسوق سلسة مع تخطيط منظم وواجهة سهلة الاستخدام
          </p>
          <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
          <div class="project-buttons">
            <a href="https://shady-fathe.github.io/Accessories-store/" target="_blank" class="btn btn-primary">العرض المباشر</a>
            <a href="https://github.com/shady-fathe/Accessories-store"  target="_blank" class="btn btn-outline">جيتهاب</a>
          </div>
        </div>
      </div>
      <div class="project-card glass">
        <div class="project-image">
          <img src="photos/prod-3.WebP" class="blur" loading="lazy">
          <div class="working"><i class="fa-solid fa-gear loop"></i>
                 <p>قريبا</p>
          </div>
                </div>
        <div class="project-content">
          <h3>متجر مستحضرات تجميل</h3>
          <p>
موقع تجارة إلكترونية لمنتجات العناية بالبشرة:
متجر احترافي عبر الإنترنت للعلامة التجارية (Brush & Blusher)،
 مصمم لعرض وبيع منتجات العناية
  بالبشرة بلمسة جمالية حديثة وتجربة تسوق سلسة وسهلة الاستخدام.

          </p>
          <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
          <div class="project-buttons">
            <a href="soon.html" target="_blank" class="btn btn-primary">العرض المباشر</a>
            <a href="#"  target="_blank" class="btn btn-outline">جيتهاب</a>
          </div>
        </div>
      </div>
    </div>
  `;
    //  section Timeline
    seTimeline.innerHTML = `
    <h2 class="section-title">المخطط الزمني للخبرة</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot "></div>
        <div class="timeline-content glass ">
          <h3>شهادة في تصميم الواجهات وتجربة المستخدم (UI/UX Certification)</h3>
          <p>2024</p>
          <p>
إتمام شهادة متقدمة في تصميم الـ UI/UX
 مع التركيز على مبادئ تصميم المنتجات الحديثة.
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot "></div>
        <div class="timeline-content glass ">
                    <h3>مطور واجهات مستخدم أول (Senior Frontend Developer)</h3>
                    <p>2025 - 2026</p>
          <p>
قيادة البنية البرمجية للواجهات وبناء 
واجهات حديثة ومتميزة لمنصات البرمجيات كخدمة (SaaS).
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot "></div>
        <div class="timeline-content glass ">
          <h3>مطور ويب مستقل</h3>
          <p>2026 - Present</p>
          <p>
العمل مع شركات ناشئة ووكالات لإنشاء مواقع 
ويب ولوحات تحكم حديثة ومتجاوبة.
          </p>
        </div>
      </div>
    </div>

`;
    // section STATS
    seSTATS.innerHTML = `
    <h2 class="section-title">الإحصائيات</h2>
    <div class="stats-grid">
      <div class="stat-card glass">
        <h2>3+</h2>
        <p>مشاريع مكتملة</p>
      </div>
      <div class="stat-card glass">
        <h2>0+</h2>
        <p>عملاء سعداء</p>
      </div>
      <div class="stat-card glass">
        <h2>1+</h2>
        <p>سنوات خبرة</p>
      </div>
      <div class="stat-card glass">
        <h2>4+</h2>
        <p> تقنيات تم إتقانها</p>
      </div>
    </div>
`;
    // section contact
titleContacth2.textContent = "تواصل معي"
titleContactP.textContent ="لنقم ببناء شيء مذهل معاً."
contactInfoTitle.textContent = "تواصل الآن"
ContactItemText.forEach(()=>{
ContactItemText[0].children[0].textContent = "البريد"
ContactItemText[1].children[0].textContent = "الهاتف"
ContactItemText[1].children[1].style.direction = "ltr"
ContactItemText[2].children[0].textContent = "الموقع"
ContactItemText[2].children[1].textContent = "مصر , الجيزه"
})
// form texts
document.querySelector("[placeholder='Your Name']").setAttribute("placeholder","اسمك")
document.querySelector("[placeholder='Your Email']").setAttribute("placeholder","بريدك")
document.querySelector("[placeholder='Your Message']").setAttribute("placeholder","رسالتك")
document.querySelector("[type='submit']").textContent = "ارسال"

    // footer
    footer.innerHTML = `
    <div class="logo">معرض ألاعمال.</div>

    <p>
© 2026 جميع الحقوق محفوظة.
    </p>
`;

    // EN
  } else {
    nav.style.direction = "ltr";
    SeOne.style.direction = "ltr";
    seOne.style.direction = "ltr";
    seTwo.style.direction = "ltr";
    seProjects.style.direction = "ltr";
    // TimelineItem.style.textalign = "left";
    seSTATS.style.direction = "ltr";
    secontact.style.direction = "ltr";
    footer.style.direction = "ltr";

    // header
    logo.forEach((e) => {
      e.textContent = "Portfolio";
    });

    headerText.forEach(() => {
      headerText[0].textContent = "Skills";
      headerText[1].textContent = "Projects";
      headerText[2].textContent = "About";
      headerText[3].textContent = "Contact";
    });

    // section one
    seOne.innerHTML = `
    <div class="se-1-content">

      <h1>
        Hi, I'm
        <span class="gradient-text">Shady Fathe</span>
      </h1>

      <h3>Front-End Web Developer</h3>

<p>
  I create modern and visually engaging frontend experiences
  with responsive layouts, smooth animations, and clean UI/UX
  designs for startups, and digital brands.
</p>
      <div class="se-1-buttons">
        <a href="#" class="btn btn-primary">
          <i class="fa-solid fa-briefcase"></i>
          Hire Me
        </a>

        <a href="Shady_Fathe_CV.pdf" class="btn btn-outline">
          <i class="fa-solid fa-download"></i>
          Download CV
        </a>

        <a href="#projects" class="btn btn-outline " id="btnprojects">
          <i class="fa-solid fa-code"></i>
          View Projects
        </a>
      </div>
<!-- btns socials -->
      <div class="socials">

        <a href="https://github.com/shady-fathe"  target="_blank" class="glass">
          <i class="fab fa-github"></i>
        </a>

<a href="https://www.linkedin.com/in/shady-fathe-dev" class="glass" target="_blank" rel="noopener noreferrer">
  <i class="fab fa-linkedin-in"></i>
</a>
        <a href="https://wa.me/+201030263353" class="glass">
          <i class="fab fa-whatsapp"></i>
        </a>

      </div>

    </div>
`;
    // section Two  About
    seTwo.innerHTML = `

    <h2 class="section-title">About Me</h2>
    <p class="section-subtitle">
      Passionate developer focused on creating premium digital
      products with modern technologies and futuristic interfaces.
    </p>
    <div class="about-container">
    <div class="about-d-2">
<div class="about-d-circles">
            <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-code"></i></div>
        </div>
                    <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-display"></i></div>
        </div>
                    <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-layer-group"></i></div>
        </div>
                    <div class="outcircle">
          <div class="circle"><i class="fa-solid fa-bolt"></i></div>
        </div>
</div>
<div class="about-d-2-texts">
    <div class="about-d-2-text glass">
        <span>clean code</span>
        <p>Scalable architecture & maintainable solutions.</p>
    </div>
        <div class="about-d-2-text glass">
                <span>Responsive Development</span>
        <p>Building seamless experiences across desktop, tablet, and mobile devices.</p>
    </div>
        <div class="about-d-2-text glass">
                      <span>Modern UI Engineering</span>
        <p>Crafting sleek interfaces with smooth interactions and premium visual aesthetics.</p>
    </div>
        <div class="about-d-2-text glass">
                <span>Fast Delivery</span>
        <p>Delivering high-quality solutions efficiently without compromising performance.</p>
    </div>
      </div>
</div>
      <div class="about-card glass">
        <h2>Crafting Modern Web Experiences</h2>
        <p>
          I specialize in developing elegant, scalable, and
          high-performance web applications with exceptional UI/UX.
          My goal is to merge creativity with clean engineering to
          build premium user experiences.
        </p>
        <div class="about-info">
          <div class="info-box glass">
            <h3>1.5+</h3>
            <p>Years Experience</p>
          </div>
          <div class="info-box glass">
            <h3>3+</h3>
            <p>Projects</p>
          </div>
          <div class="info-box glass">
            <h3>0+</h3>
            <p>Clients</p>
          </div>
        </div>
      </div>
    </div>
    `;
    // section Skills
    seSkillsH2.textContent = "Skills & Technologies";
    seSkillsP.textContent =
      "Technologies and tools I use to create premium digital experiences.";
    // section Projects
    seProjects.innerHTML = `
    <h2 class="section-title">Featured Projects</h2>
    <p class="section-subtitle">
      A collection of premium modern projects and digital products.
    </p>
    <div class="projects-grid">
      <div class="project-card glass">
        <div class="project-image">
          <img src="photos/prod-1.WebP"class="blur" loading="lazy">
          <div class="working"><i class="fa-solid fa-gear loop"></i>
                 <p>Soon</p>
          </div>
        </div>
        <div class="project-content">
          <h3> Clothes Store</h3>
          <p>
An interactive and fully responsive clothing store featuring category filtering, smooth animations, and a modern user experience for effortless browsing and shopping.
          </p>
          <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
          <div class="project-buttons">
            <a href="soon.html" target="_blank" class="btn btn-primary">Live Demo</a>
            <a href="#"  target="_blank"  class="btn btn-outline">GitHub</a>
          </div>
        </div>
      </div>
      <div class="project-card glass">
        <div class="project-image">
          <img src="photos/prod-2.WebP"  loading="lazy"></div>
        <div class="project-content">
          <h3>Accessories E-commerce Store</h3>
          <p>
A modern, responsive online store for mobile phone accessories, 
designed to deliver a seamless shopping experience with a clean 
layout and user-friendly interface.
          </p>
          <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
          <div class="project-buttons">
            <a href="https://shady-fathe.github.io/Accessories-store/" target="_blank" class="btn btn-primary">Live Demo</a>
            <a href="https://github.com/shady-fathe/Accessories-store"  target="_blank" class="btn btn-outline">GitHub</a>
          </div>
        </div>
      </div>
      <div class="project-card glass">
        <div class="project-image">
          <img src="photos/prod-3.WebP" class="blur" loading="lazy">
          <div class="working"><i class="fa-solid fa-gear loop"></i>
                 <p>Soon</p>
          </div>
                </div>
        <div class="project-content">
          <h3>Brush & Blusher</h3>
          <p>
     E-commerce Website for Skincare Products
     A professional online store for the
    (Brush & Blusher) brand, designed to showcase
    and sell skincare products with a modern aesthetic
    and a smooth, user-friendly shopping experience.
          </p>
          <div class="tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
          <div class="project-buttons">
            <a href="soon.html" target="_blank" class="btn btn-primary">Live Demo</a>
            <a href="#"  target="_blank" class="btn btn-outline">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  `;
    //  section Timeline
    seTimeline.innerHTML = `
    <h2 class="section-title">Experience Timeline</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot "></div>
        <div class="timeline-content glass ">
          <h3>UI/UX Certification</h3>
          <p>2024</p>
          <p>
            Completed advanced UI/UX design certification with
            modern product design principles.
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot "></div>
        <div class="timeline-content glass ">
                    <h3>Senior Frontend Developer</h3>
                    <p>2025 - 2026</p>
          <p>
            Leading frontend architecture and building modern
            premium interfaces for SaaS platforms.
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-dot "></div>
        <div class="timeline-content glass ">
          <h3>Freelance Web Developer</h3>
          <p>2026 - Present</p>
          <p>
            Worked with startups and agencies creating responsive
            modern websites and dashboards.
          </p>
        </div>
      </div>
    </div>

`;
    // section STATS
    seSTATS.innerHTML = `
    <h2 class="section-title">Statistics</h2>
    <div class="stats-grid">
      <div class="stat-card glass">
        <h2>3+</h2>
        <p>Projects Completed</p>
      </div>
      <div class="stat-card glass">
        <h2>0+</h2>
        <p>Happy Clients</p>
      </div>
      <div class="stat-card glass">
        <h2>1+</h2>
        <p>Years Experience</p>
      </div>
      <div class="stat-card glass">
        <h2>4+</h2>
        <p>Technologies Mastered</p>
      </div>
    </div>
`;
    // section contact
titleContacth2.textContent = "Contact Me"
titleContactP.textContent ="Let's build something amazing together."
contactInfoTitle.textContent = "Get In Touch"
ContactItemText.forEach(()=>{
ContactItemText[0].children[0].textContent = "Email"
ContactItemText[1].children[0].textContent = "Phone"
ContactItemText[1].children[1].style.direction = "ltr"
ContactItemText[2].children[0].textContent = "Location"
ContactItemText[2].children[1].textContent = "Giza, Egypt"
})
// form texts
document.querySelector("[placeholder='اسمك']").setAttribute("placeholder","Your Name")
document.querySelector("[placeholder='بريدك']").setAttribute("placeholder","Your Email")
document.querySelector("[placeholder='رسالتك']").setAttribute("placeholder","Your Message")
document.querySelector("[type='submit']").textContent = "Send Massage"
    // footer
    footer.innerHTML = `
    <div class="logo">Portfolio.</div>

    <p>
      © 2026 All Rights Reserved.
    </p>
`;
  }
  // end of addEventListener
});

// funtion to show && hide btns [language , them]

btnsetting.addEventListener("click", () => {
  btnsetting.style.transform += "rotate(180deg)";
  if (btnlanguage.style.opacity == 0) {
    btnlanguage.style.opacity = 1;
    btnlanguage.style.pointerEvents = "auto";
  } else {
    btnlanguage.style.opacity = 0;
    btnlanguage.style.pointerEvents = "none";
  }
});
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
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.textContent = "Thanks! Your message has been sent successfully.";
        status.style.color = "green";
        form.reset();
      } else {
        status.textContent = "Oops! There was a problem submitting your form.";
        status.style.color = "red";
      }
    })
    .catch((error) => {
      status.textContent = "Oops! Network error, please try again.";
      status.style.color = "red";
    });
});

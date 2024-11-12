
window.addEventListener('scroll',(e)=>{
    const element = document.getElementById("navbar");
    
    if(window.scrollY > 0){
        element.classList.add("bg-sky-200","dark:bg-slate-900","border",'shadow-inner')
        return;
    } 
    element.classList.remove("bg-sky-200","dark:bg-slate-900","border",'shadow-inner')

})
var themeToggleDarkIcon = document.getElementById("moon");
var themeToggleLightIcon = document.getElementById("sun");

    // Change the icons inside the button based on previous settings
    if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        themeToggleLightIcon.classList.remove("hidden");
    } else {
        themeToggleDarkIcon.classList.remove("hidden");
    }

    var themeToggleBtn = document.getElementById("theme-toggle");

    themeToggleBtn.addEventListener("click", function () {
        // Toggle icons inside button
        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");

        // If set via local storage previously
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }

        // If NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }
    });

// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// const iconToggle = () =>{
//     moonIcon.classList.toggle("hidden");
//     sunIcon.classList.toggle("hidden");
// }

// const themeCheck = () =>{
//     if(userTheme === "dark" || (!userTheme && systemTheme)){
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("hidden");
//         return;
//     }
//     moonIcon.classList.add("hidden");
// }

// const themeSwitch = () =>{
//     debugger
//     if(document.documentElement.classList.contains("dark")){
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme","light");
//         iconToggle();
//         return;
//     }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme","dark");
//     iconToggle();
// }

// sunIcon.addEventListener('click',()=>{
//     themeSwitch();
// })
// moonIcon.addEventListener('click',()=>{
//     themeSwitch();
// });

// themeCheck();

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


    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('#navbar a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // change 
                const screenSection = entry.target.id
                navItems.forEach( a=> {
                    if(a.dataset.nav === screenSection && a.dataset.nav){
                        a.classList.add("text-blue-500")
                        return;
                    }
                    a.classList.remove("text-blue-500")
                    return;
                })
                // Aquí podrías añadir o cambiar la clase de una sección visible
                // o actualizar un menú de navegación
            }
        });
    }, {
        threshold: 0.25  // 50% visible en pantalla para considerarla "visible"
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
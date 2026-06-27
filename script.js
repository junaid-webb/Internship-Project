console.log("AI Interview Coach - Day 3 Loaded Successfully!");
const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", function (event) {

        event.preventDefault();

        startBtn.innerHTML = `
            <span class="spinner-border spinner-border-sm"></span>
            Loading...
        `;

        startBtn.classList.add("disabled");

        setTimeout(function () {

            window.open(
                "https://ai-interview-buddy-yxpk.onrender.com",
                "_blank"
            );

            startBtn.innerHTML = "Start Interview";

            startBtn.classList.remove("disabled");

        }, 1800);

    });

}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");

    }

});

document.querySelectorAll("a[href^='#']").forEach(function(link){

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    counterStarted = true;

    counters.forEach(function(counter){

        const targetText = counter.innerText;

        const number = parseInt(targetText);

        let count = 0;

        const increment = Math.ceil(number / 50);

        const interval = setInterval(function(){

            count += increment;

            if(count >= number){

                counter.innerText = targetText;

                clearInterval(interval);

            }else{

                if(targetText.includes("%")){

                    counter.innerText = count + "%";

                }

                else if(targetText.includes("+")){

                    counter.innerText = count + "+";

                }

                else{

                    counter.innerText = count;

                }

            }

        },30);

    });

}

window.addEventListener("scroll",function(){

    const stats=document.querySelector(".stats");

    if(stats){

        const position=stats.getBoundingClientRect().top;

        if(position<window.innerHeight-100){

            startCounter();

        }

    }

});


const fadeElements=document.querySelectorAll(

".feature-card,.stat-card,.step-card,#about"

);

function reveal(){

    fadeElements.forEach(function(item){

        const top=item.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            item.classList.add("show","fade-up");

        }

    });

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);


const features=document.querySelectorAll(".feature-card");

features.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.cursor="pointer";

    });

});


setTimeout(function(){

    console.log("🚀 Welcome to AI Interview Coach");

},1000);
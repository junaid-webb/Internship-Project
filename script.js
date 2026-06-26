

console.log("AI Interview Coach - Day 2 Loaded Successfully!");



const startBtn = document.getElementById("startBtn");

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

    }, 2000);

});



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.classList.add("shadow");

    }

    else {

        navbar.classList.remove("shadow");

    }

});


const hero = document.querySelector(".hero");

window.addEventListener("load", function () {

    hero.style.opacity = "0";

    hero.style.transition = "1s";

    setTimeout(function () {

        hero.style.opacity = "1";

    }, 200);

});



const cards = document.querySelectorAll(".stat-card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        console.log("Viewing Statistics");

    });

});



setTimeout(function(){

    console.log("Welcome to AI Interview Coach 🚀");

},1000);
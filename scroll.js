// ============ FUNKCIE NA SCROLLOVANIE ODKAZOV NA STRANKE ===========================

// ================  ABOUT

let aboutButton = document.querySelector(".about_button");
let aboutHash = document.querySelector("#about").offsetTop;
aboutButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: aboutHash -200,
        behavior: "smooth"
    })
})


// ==============PORTFOLIO

let portfolioButton = document.querySelector(".portfolio_button");
let portfolioHash = document.querySelector("#portfolio").offsetTop;
portfolioButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: portfolioHash -50,
        behavior: "smooth"
    })
})

// =============== ABOUT MINI BUTTON

let aboutClass = document.querySelector(".about");
aboutClass.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: aboutHash -200,
        behavior: "smooth"
    })
})

// ================== CONTACT BAR

let contactButton = document.querySelector(".contact_button");
let contactHash = document.querySelector("#contact_me").offsetTop;
contactButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: contactHash,
        behavior: "smooth"
    })
})

//-------------------------------- BACK TO TOP   --------------------------------------


var backToTop = document.createElement("p");
backToTop.classList.add("back_to_top");
backToTop.innerHTML = "Top";
document.querySelector("body").appendChild(backToTop);

window.addEventListener("scroll", function(){
    let scrolled = window.scrollY
    if( scrolled >850){
        let toTop = backToTop;
        toTop.style.display ="block"
        
        toTop.addEventListener("click", function(){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            
            })
        })
     }
    if( scrolled <700){
        backToTop.style.display= "none"
        
    }
   
})

// ============ FUNKCIE NA SCROLLOVANIE ODKAZOV NA STRANKE ===========================

let aboutButton = document.querySelector(".about_button");
let aboutHash = document.querySelector("#about").offsetTop;


aboutButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: aboutHash,
        behavior: "smooth"
    })
})

let portfolioButton = document.querySelector(".portfolio_button");
let portfolioHash = document.querySelector("#portfolio").offsetTop;

portfolioButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: portfolioHash,
        behavior: "smooth"
    })
})

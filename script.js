// ============ FUNKCIE NA SCROLLOVANIE ODKAZOV NA STRANKE ===========================

let aboutButton = document.querySelector(".about_button");
let aboutHash = document.querySelector("#about").offsetTop;


aboutButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: aboutHash -200,
        behavior: "smooth"
    })
})

let portfolioButton = document.querySelector(".portfolio_button");
let portfolioHash = document.querySelector("#portfolio").offsetTop;

portfolioButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: portfolioHash -50,
        behavior: "smooth"
    })
})

let aboutClass = document.querySelector(".about");

aboutClass.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: aboutHash -200,
        behavior: "smooth"
    })
})


let contactFormular = document.querySelector(".contact_formular")


contactFormular.addEventListener("submit", function(event){
    event.preventDefault()
    let firstName = event.target.firstName.value
    let yourEmail = event.target.email.value
    let yourPhone = event.target.yourPhone.value
    let yourSubject = event.target.yourSubject.value
    let yourMessage = event.target.message.value

    console.log("odoslalo sa to" + " " + firstName + " " + yourEmail + " " + yourPhone+ " " + yourSubject+ " " + yourMessage);
})



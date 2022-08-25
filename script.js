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

let contactButton = document.querySelector(".contact_button");
let contactHash = document.querySelector("#contact_me").offsetTop;

contactButton.addEventListener("click", function(event){
    event.preventDefault();
    window.scrollTo({
        top: contactHash -500,
        behavior: "smooth"
    })
})


let contactFormular = document.querySelector(".contact_formular");
var customers = [
   
]


contactFormular.addEventListener("submit", function(event){
    event.preventDefault()
    let firstName = event.target.firstName.value
    let yourEmail = event.target.email.value
    let yourPhone = event.target.yourPhone.value
    let yourSubject = event.target.yourSubject.value
    let yourMessage = event.target.message.value

    let result = firstName + " | " + yourEmail + " | "+ yourPhone + " | " + yourSubject+ " | " + yourMessage;
    customers.push(result);

    // customers.push(firstName, yourEmail, yourMessage, yourPhone, yourSubject);



    
    customersJ = JSON.stringify(customers);
    localStorage.setItem("Users", customersJ);
    
    let customersFromLS = localStorage.getItem("Users")
    let myUserFromLS = JSON.parse(customersFromLS);
    
    console.log(myUserFromLS);

    console.log(customers[0]);

   

    // console.log("odoslalo sa to" + " " + firstName + " " + yourEmail + " " + yourPhone+ " " + yourSubject+ " " + yourMessage);
})




// BACK TO TOP


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
        console.log(scrolled)
    }
   
})

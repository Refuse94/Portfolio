const englishButton = document.querySelector(".slovak")
const slovakButton = document.querySelector(".eng")

const aboutSlovak ={
    a: "O mne"
}
const homeSlovak = {
    a: "Domov"
}
const contactSlovak = {
    a: "Kontakt"
}
const reviewsSlovak = {
    a: "Recenzie"
}

const homeTextSlovak ={
    h2: "Ahoj volám sa",
    h3: "Som kreatívna dizajnérka zo Slovenska",
    h4: "Hand-made dizajnérka so sídlom na Slovensku a som veľmi zanietená a oddaná svojej práci "
}

const aButton = document.querySelector(".about_button")
const homeButton = document.querySelector(".home_button")
const cButton = document.querySelector(".contact_button")
const reviewsButton = document.querySelector(".reviews_button")
const homeText = document.querySelector("#home_text h2")
const homeTextH3 = document.querySelector("#home_text h3")
const homeTextH4 = document.querySelector("#home_text h4")
const aboutME = document.querySelector(".social_icons .about")
console.log(homeText)



englishButton.addEventListener("click", function(){
    
    aButton.textContent = aboutSlovak.a;
    homeButton.textContent= homeSlovak.a;
    cButton.textContent= contactSlovak.a;
    reviewsButton.textContent= reviewsSlovak.a;
    homeText.textContent= homeTextSlovak.h2;
    homeTextH3.textContent = homeTextSlovak.h3;
    homeTextH4.textContent = homeTextSlovak.h4;
    aboutME.textContent= aboutSlovak.a;
   

    
})

slovakButton.addEventListener("click", function(){
    window.location.reload();
})
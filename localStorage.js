let contactFormular = document.querySelector(".contact_formular");
// PODMIENKA NECH SA MI POLE NEVYTVARA ODZNOVA PRI ZNOVU NACITANI STRANKY

if (localStorage.getItem("Users") == null) {
    var customers = []
} else {
    customers = JSON.parse(localStorage.getItem("Users"))
}


// ODCHYTENIE MOJICH INPUTOV
const formular = document.querySelector("#form")
const myName = document.querySelector(".my_name");
const myEmayl = document.querySelector(".my_emayl");
const myPhone = document.querySelector(".my_phone");
const mySubject = document.querySelector(".my_subject");
const myMessage = document.querySelector(".my_message");

// SUBMIT FUNKCIA 
contactFormular.addEventListener("submit", function (event) {
    event.preventDefault()
    // VALUE Z INPUTOV
    let firstName = event.target.firstName.value
    let yourEmail = event.target.email.value
    let yourPhone = event.target.yourPhone.value
    let yourSubject = event.target.yourSubject.value
    let yourMessage = event.target.message.value

    // PUSH DO POLA
    customers.push({myName: firstName, myEmayl: yourEmail, myPhone: yourPhone, mySubject: yourSubject, myMessage: yourMessage});
    
    // UKLADANIE DO LOCAL STORAGE
    customersJ = JSON.stringify(customers);
    localStorage.setItem("Users", customersJ);

    // VYPIS Z LOCAL STORAGE NA S5
    let customersFromLS = localStorage.getItem("Users")
    let myUserFromLS = JSON.parse(customersFromLS);

    console.log(myUserFromLS);
    
    // VYMAZANIE INPUTOV PO ODOSLANI SUBMITU
    event.target.firstName.value = ""
    event.target.email.value = ""
    event.target.yourPhone.value = ""
    event.target.yourSubject.value = ""
    event.target.message.value = ""
})











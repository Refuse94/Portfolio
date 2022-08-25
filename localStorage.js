let contactFormular = document.querySelector(".contact_formular");

if (localStorage.getItem("Users") == null) {
    var customers = []
} else {
    customers = JSON.parse(localStorage.getItem("Users"))
}



contactFormular.addEventListener("submit", function (event) {
    event.preventDefault()
    let firstName = event.target.firstName.value
    let yourEmail = event.target.email.value
    let yourPhone = event.target.yourPhone.value
    let yourSubject = event.target.yourSubject.value
    let yourMessage = event.target.message.value

    let result = " [ " + firstName + " ] " + yourEmail + " | " + yourPhone + " | " + yourSubject + " | " + yourMessage;
    customers.push(result);

// const obj ={
//     age:
//     meno: firstName

// }

// const arr = [obj1, obj2]

// arr[1].meno

    // customers.push(firstName, yourEmail, yourMessage, yourPhone, yourSubject);




    customersJ = JSON.stringify(customers);
    localStorage.setItem("Users", customersJ);

    let customersFromLS = localStorage.getItem("Users")
    let myUserFromLS = JSON.parse(customersFromLS);

    console.log(myUserFromLS);

    console.log(customers[0]);





    // console.log("odoslalo sa to" + " " + firstName + " " + yourEmail + " " + yourPhone+ " " + yourSubject+ " " + yourMessage);
})
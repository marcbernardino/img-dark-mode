"use strict";

function changeMode() {
    document.getElementById("dark").classList.toggle("darkMode");
}

function validateForm() {
    var firstName = document.getElementById("first").value;
    var lastName = document.getElementById("last").value;
    var phone = document.getElementById("phoneInput").value;
    var email = document.getElementById("emailInput").value;
    var comments = document.getElementById("commentArea").value;
    
    if (firstName == "") {
        alert("First name is required.");
        return false;
    }
    
    if (lastName == "") {
        alert("Last name is required.");
        return false;
    }
    
    if (document.getElementById("emailInput").value == "" && document.getElementById("phoneInput").value == "") {
        alert("Please enter the information you selected.")
        return false;
    }
    
    if (document.getElementById("phone").checked && document.getElementById("phoneInput").value == "") {
        alert("Phone number required.");
        return false;
    }
    
    if (document.getElementById("email").checked && document.getElementById("emailInput").value == "") {
        alert("E-mail required.");
        return false;
    }
    
    var userInput = [firstName + " " + lastName + " " + phone + email + " " + comments];
    
    alert("You entered the following information: " + userInput);
    return true;
}

var mainPhoto = function() {
    document.getElementById("bigPic").src = "soloPros.png";
}

var mainPhoto2 = function() {
    document.getElementById("bigPic").src = "powerBeatsPro.png";
}

var mainPhoto3 = function() {
    document.getElementById("bigPic").src = "studiosWireless.png";
}
    
window.onload = function() {
    document.getElementById("picButton").onclick = mainPhoto;
    document.getElementById("picButton2").onclick = mainPhoto2;
    document.getElementById("picButton3").onclick = mainPhoto3;
}
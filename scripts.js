function myfunc(event) {
    event.preventDefault();

var nev = document.getElementById("nev").value;
var email = document.getElementById("email").value;
var jelszo= document.getElementById("jelszo").value;
var osztaly= document.getElementById("osztaly").value;
var intezmeny = document.getElementById("intezmeny").value;
var nem = document.getElementById("nem");

nem.checked? nem = "fiu" : nem = "lany";

localstorage.setItem('ls_full_name', nev);
localstorage.setItem('ls_nem', nem);
localStorage.setItem('ls_osztaly', osztaly);
localStorage.setItem('ls_email', email);
localStorage.setItem('jelszo', jelszo);
localStorage.setItem('intezmeny', intezmeny);

}

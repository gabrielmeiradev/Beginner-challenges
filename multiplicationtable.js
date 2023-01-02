function multiplication(){

// DOM Elements
var e = document.querySelector("#c10");
var t = document.querySelector("#table");
var input = document.querySelector("#input").value;

for(var i = 0; i <= 10; i++){
    var elem = document.createElement("li");
    elem.innerHTML = input + " * " + i + " = " + input*i;
    t.appendChild(elem);
}
}
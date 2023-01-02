function converter(){

// DOM Elements
var i1 = document.querySelector("#input1").value;
var r = document.querySelector("#result");
var select1 = document.querySelector("#u1");
let selected1 = select1.options[select1.selectedIndex].value;
var select2 = document.querySelector("#u2");
let selected2 = select2.options[select2.selectedIndex].value;


// Equal units rule
if(selected1 === selected2){
    r.innerHTML = "Select different units";
}

else if(i1.length <= 0){
    r.innerHTML = "Put a value in the input";
}

else if(selected1 != selected2){

// Different type units rule
if(selected1 == "km" && selected2 == "celsius" || selected1 == "celsius" && selected2 == "km" || selected1 == "miles" && selected2 == "celsius" || selected1 == "celsius" && selected2 == "miles" || selected1 == "miles" && selected2 == "fahrenheit" || selected1 == "fahrenheit" && selected2 == "miles" || selected1 == "km" && selected2 == "fahrenheit" || selected1 == "fahrenheit" && selected2 == "km"){
    r.innerHTML = "Select compatible types"
}

else{
    var result = 0;
    // Do convertions
    if(selected1 == "km" && selected2 == "miles" ){
        result = i1/1.609;
    }

    else if(selected1 == "miles" && selected2 == "km" ){
        result = i1*1.609;
    }

    else if(selected1 == "celsius" && selected2 == "fahrenheit" ){
        result = (i1*9/5) + 32;
    }

    else if(selected1 == "fahrenheit" && selected2 == "celsius" ){
        result = (i1-32) * 5/9;
    }

    r.innerHTML = `${i1} ${selected1} to ${selected2} = ${result.toFixed(2)} ${selected2}`;
}
}
}
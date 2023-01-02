var arr = [1, 4, 2, 3],
    s1 = [];
    h1 = document.querySelector("#out");
    pre = document.querySelector("#o");

for(var l = 0; l < arr.length; l++){
    s1.push(arr[l]);
}

function sorted(){
function sortNumber(a, b){
    return a - b;
}

arr = arr.sort(sortNumber);
h1.innerHTML = arr;
pre.innerHTML = s1;
}
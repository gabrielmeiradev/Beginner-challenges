const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var h1 = document.querySelector("#arrayout");
var pre = document.querySelector("#arrayo");

function reverse(){
    var narr = [];
    for(var k = arr.length; k != 0; k--){
        narr.push(arr[k-1]);
    }
    pre.innerHTML = arr;
    h1.innerHTML = narr;
}
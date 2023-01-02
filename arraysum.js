function getsum(){  
    var a1 = [1, 2, 3];
    var s1 = [];
    for(var l = 0; l < a1.length; l++){
        s1.push(a1[l]);
    }
    var a2 = [4, 5, 6, 1, 3];
    var s2 = [];
    for(var l = 0; l < a2.length; l++){
        s2.push(a2[l]);
    }
    var sum = 0;

    var h1 = document.querySelector("#array");
    var dif1 = a1.length - a2.length;
    var dif2 = a2.length - a1.length;

    if (a1.length > a2.length){
        for(var k = 0; k < dif1; k++){
            a2.push(0);
        }
    }

    else if(a1.length < a2.length){
        for(var k = 0; k < dif2; k++){
            a1.push(0);
        }
    }

    for(var i=0; i<a1.length; i++){
        sum+=a1[i]+a2[i];
    }

    h1.innerHTML = `${s1} + ${s2} = ${sum}`;
}
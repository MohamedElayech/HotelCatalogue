function Func(i, k) {
    let element = document.getElementById(`number${i}`);
    element.textContent = k;
}

function move(i, k) {
    let j = 1; 
    let intervalID = setInterval(function() {
        Func(i, j);
        j++;
        if (j > k) {
            clearInterval(intervalID); 
        }
    }, 250);
}


window.onload = setTimeout(()=> {
    move(1, 1);
    move(2, 2);
    move(3, 5);
    move(4, 6);
    move(5, 9);

    move(6, 3);
    move(7, 4);
    move(8, 5);
    move(9, 6);
    move(10, 1);

    move(11, 1);
    move(12, 4);
    move(13, 7);
},1000);



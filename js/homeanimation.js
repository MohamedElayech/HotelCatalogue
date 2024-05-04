const arrowbuttns= document.querySelectorAll(".fa-solid");
const carousel = document.querySelector(".carousel")
const cardwidth = carousel.querySelector(".card").offsetWidth;
arrowbuttns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "1" ? -cardwidth : cardwidth;
    })
});

const observer = new IntersectionObserver((inputs) => {
    inputs.forEach((input) => {
        if(input.isIntersecting){
            input.target.classList.add('show');
        }else{
            input.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

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
},1000,4000);


const audioElement = document.getElementById('song');
audioElement.play();
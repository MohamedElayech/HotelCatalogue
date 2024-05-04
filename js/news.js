// const parentElements = document.getElementsByClassName("newsdivsion"); 

// parentElements.forEach(parentElement => {
//     parentElement.addEventListener("mouseover", function() {
//         for (const child of parentElement.children) {
//             if (child.classList.contains('desch1')) {
//               child.style.opacity = 1; 
//               console.log(child)
//             }
//           }
//     });
// });

const parentElements = document.getElementsByClassName("newsdivsion"); 

for (let i=0;i<parentElements.length;i++){
    parentElements[i].addEventListener("mouseover",affectnews)
    parentElements[i].addEventListener("mouseout",disaffectnews)
}


function affectnews(){
    
    this.classList.add('newsdiv')
    
     
}

function disaffectnews(){
    this.classList.remove('newsdiv')
    
}




// function news1() {
//     const parent1 = document.querySelector("#newsdivsion1"); 
//     let child=document.getElementById('disch1')
//     child.style.opacity = 1; 
//     console.log("done")
//     parent1.classList.add('newsdiv')
    
// }

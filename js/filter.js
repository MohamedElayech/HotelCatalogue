


document.addEventListener("DOMContentLoaded", function() {
    
    var nb=0;
    const element1 = document.getElementById("inc1");
    element1.addEventListener("click", incr);

    function incr() {
        if(nb<=29){
            nb+=1;
            document.getElementById("data1").innerHTML = nb;
        }
        
    }
    const element2=document.getElementById("dec1");
    element2.addEventListener("click",decr)
    function decr(){
        if(nb>1){
            nb-=1;
            document.getElementById("data1").innerHTML=nb;
        }
    }

    var nb1=0;
    const element3 = document.getElementById("inc2");
    element3.addEventListener("click", incr2);

    function incr2() {
        if(nb1<=29){
            nb1+=1;
            document.getElementById("data2").innerHTML = nb1;
        }
        
    }
    const element4=document.getElementById("dec2");
    element4.addEventListener("click",decr2)
    function decr2(){
        if(nb1>0){
            nb1-=1;
            document.getElementById("data2").innerHTML=nb1;
        }
    }
   

    var nb2=0;
    const element5= document.getElementById("inc3");
    element5.addEventListener("click", incr3);

    function incr3() {
        if(nb2<=29){
            nb2+=1;
            document.getElementById("data3").innerHTML = nb2;
        }
        
    }
    const element6=document.getElementById("dec3");
    element6.addEventListener("click",decr3)
    function decr3(){
        if(nb2>1){
            nb2-=1;
            document.getElementById("data3").innerHTML=nb2;
        }
    }


    const element7=document.getElementById("res-param") ;
    element7.textContent='adult'+nb+'        children'+ nb1 +'         Room' +nb2   ;

   
   
    
});

var nb1=0;
function onkey(){
    
    if(nb1==0){
        nb1+=1;
        alert("Aï Aï Aï, doucement sur le clavier");    
    } 
    
}

function apparaitre() {
    var nbperch1 = document.getElementById("nb-per-ch");
    nbperch1.style.display = "block"; 
}
function disparaitre(){
    var nbperch2=document.getElementById("nb-per-ch");
    nbperch2.style.display="none"

}
var t=0;
function travailler(){
    if (t==0){
        t+=1;
        apparaitre();
        
    }else if (t==1){
        disparaitre();
        t-=1;
    }
}
var nbperch=document.getElementById("nb-per-ch");
nbperch.innerHTML="adult"+ nb +"children" + nb1 +"Room"+nb2;

var select1 = document.getElementById("select1");
var price1 = document.getElementById("single");
var select2 = document.getElementById("select2");
var price2 = document.getElementById("double");
var select3 = document.getElementById("select3");
var price3 = document.getElementById("triple");
var select4 = document.getElementById("select4");
var price4 = document.getElementById("quadruple");
var select5 = document.getElementById("select5");
var price5 = document.getElementById("suit");

var ps=0;
var pd=0
var pt=0
var pq=0
var pst=0


function change1(){
    let price=250
    let ch = select1.value
    switch(ch){
        case("All_Inclusive"):
            price+=100
            break
        case("Full_board"):
            price+=80
            break
        case("Half_board"):
            price+=50
            break
    }
    ps=price
    price1.innerHTML=price+" DT"
    console.log(select1.value)
}
function change2(){
    let price=235
    let ch = select2.value
    switch(ch){
        case("All_Inclusive"):
            price+=100
            break
        case("Full_board"):
            price+=80
            break
        case("Half_board"):
            price+=50
            break
    }
    pd=price
    price2.innerHTML=price+" DT"
    console.log(select2.value)
}

function change3(){
    let price=209
    let ch = select3.value
    switch(ch){
        case("All_Inclusive"):
            price+=100
            break
        case("Full_board"):
            price+=80
            break
        case("Half_board"):
            price+=50
            break
    }
    pt=price
    price3.innerHTML=price+" DT"
    console.log(select3.value)
}

function change4(){
    let price=179
    let ch = select4.value
    switch(ch){
        case("All_Inclusive"):
            price+=100
            break
        case("Full_board"):
            price+=80
            break
        case("Half_board"):
            price+=50
            break
    }
    pq=price
    price4.innerHTML=price+" DT"
    console.log(select4.value)
}
function change5(){
    let price=305
    let ch = select5.value
    switch(ch){
        case("All_Inclusive"):
            price+=100
            break
        case("Full_board"):
            price+=80
            break
        case("Half_board"):
            price+=50
            break
    }
    pst=price
    price5.innerHTML=price+" DT"
    console.log(select5.value)
}
let period=""
let price=0


function single(){
    // let period1 = document.getElementById("select1");
    price=ps
    period=select1.value
    localStorage.setItem("price", price);
    localStorage.setItem("period", period);
    location.href="paiement1.html"
    
    console.log(period+" "+price)
    calculernbj()
}
var nbj=0
 
window.onload = function() {
    let storedPrice = localStorage.getItem("price");
    
    let storedPeriod = localStorage.getItem("period");
    
    
    document.getElementById("infos").innerHTML = "You selected a single room " + storedPeriod + " for " + storedPrice + " DT per day.";
    
   
}

function calculernbj() {
    let dateech = new Date(document.getElementById("dateech").value);
    let dateneg = new Date(document.getElementById("dateneg").value);
    if (dateech > dateneg) {
        [dateech, dateneg] = [dateneg, dateech];
    }
    const diff = dateneg.getTime() - dateech.getTime();
    nbj = Math.round(diff / (1000 * 3600 * 24) * 100) / 100;
    console.log(nbj)
    // console.log(period+ "a")
    let price=localStorage.getItem("price")
    let period = localStorage.getItem("period")
    // document.getElementById("infos").innerHTML = "You selected a single room " + period + " for " + price + " DT per day.";
    document.getElementById("days").innerHTML =nbj + " Days";
    let p=document.getElementById('pricep')
    p.innerHTML=price*nbj + " DT"
}
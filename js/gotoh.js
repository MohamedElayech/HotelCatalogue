function go_back(){
    let yes = prompt("Type 'yes' if you want to cancel paiment and return to the hotelpage");
    if(yes==="yes"){
        history.back()
    }
}

function pay(){
    alert("A facture will be send to your email")
    history.back()
}
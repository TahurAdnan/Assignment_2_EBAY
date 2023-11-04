function show() {
    var name = document.getElementById("nameInput").value;
    
    var oil = document.getElementById("oilInput").value;
    var quantity = parseInt(document.getElementById("quantityInput").value);

    if (quantity === 2 ){
    document.getElementById("mainContent").innerHTML=`<h4> Hello ${name} your bill is BDT 400.<h4>`;
    }
    else if (quantity === 1){
    document.getElementById("mainContent").innerHTML=`<h4> Hello ${name} your bill is BDT 200.<h4>`;
    }
    else{
    document.getElementById("mainContent").innerHTML=`<h4> Hello ${name}, Minumum purchase quantity is 1 and maximum purchase quantity is 2.<h4>`;
    }


}
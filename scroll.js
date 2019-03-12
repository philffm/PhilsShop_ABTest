var testActive = Math.round(Math.random());


if (testActive==1) {

    window.addEventListener("scroll", function (event) {
        var scroll = this.scrollY;
        console.log(scroll)
        checkScrollState()
    });
}else{};



function checkScrollState(){

   
    if (this.scrollY>=500) {
        document.querySelector('#SUBNAV > div.BTN_Shopping_Cart').style = "display:none"
        document.querySelector('#SUBNAV > div.BTN_AddToCart_bottom').style = "display:block"
    
    }else {
        document.querySelector('#SUBNAV > div.BTN_AddToCart_bottom').style = "display:none"
        document.querySelector('#SUBNAV > div.BTN_Shopping_Cart').style = "display:block"

    }

    
}




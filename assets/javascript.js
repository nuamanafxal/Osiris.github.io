/** */
function BuyNow(){
    document.getElementById('BuyNow').style.display='block';
    }
    /**Payment  */
    /**Home payment Success */
    function OpenPayment(){
    document.getElementById('openPayment').style.display='block';
    document.getElementById('BuyNow').style.display='none';
    }
    /**Home payment Success */
    function PaymentSuccess(){
    document.getElementById('PD').style.display='block';
    document.getElementById('openPayment').style.display='none';
    }
    /*accordion*/
    function accordionn(){
    var acc = document.getElementsByClassName("accordionn");
    var i;
    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("acc-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    } 
    });
    }
    }
    
    /*payment selection tabs*/
    function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-redd", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-redd";
    }
const allBtn =document.getElementsByClassName("donation");
for(btn of allBtn){
    btn.addEventListener("click",function(e){
        const input_amount=parseFloat(e.target.parentNode.childNodes[1].value)
        const title =e.target.parentNode.parentNode.childNodes[3].innerText
        const donated_tk=parseFloat(e.target.parentNode.parentNode.childNodes[1].childNodes[2].innerText);
        const main=parseFloat(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[2].innerText);
      document.getElementById('1st-donated-price').innerText=input_amount
      return
      document.getElementById('2nd-donated-price').innerText=input_amount
      document.getElementById('3rd-donated-price').innerText=input_amount
    })
}

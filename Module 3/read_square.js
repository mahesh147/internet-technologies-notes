function square(){
    var num=prompt("Enter a number of your choice:");
    num=parseInt(num);
    var res = num*num;
    var x;
    x=document.getElementById("result");
    x.innerHTML="Square of a number is " + res;
}
window.addEventListener("load",square,false);
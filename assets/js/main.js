var num = 0;
document.getElementById("myImg").onclick = agrandir;
function agrandir() {
    if (num == 0) {
        num = 1;
        document.getElementById("myImg").style.height = 388 + "px";
        // document.image.height = 388;   /*OU*/  
       
    }
    else {
        num = 0;
        // document.image.height = 198;   /*OU*/
         document.getElementById("myImg").style.height = 198 + "px";
    }
}
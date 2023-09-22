var c = new Date("jan 13, 2024 00:00:00").getTime();

var x = setInterval(function() {

var now = new Date().getTime();
 var dis = c- now;
 var days = Math.floor(dis / (1000 * 60 * 60 *24));
 var hrs = Math.floor((dis%(1000*60*60*24))/(1000*60*60));
 var min = Math.floor ((dis%(1000*60*60))/(1000*60));
 var sec=Math.floor((dis%(1000*60))/1000);

document.getElementById("box5").innerHTML= days ;
document.getElementById("box6").innerHTML= hrs ;
document.getElementById("box7").innerHTML= min ;
document.getElementById("box8").innerHTML= sec; 

if (dis < 0) {
    clearInterval(x);
    document.getElementById("box").innerHTML = "HAPPY BIRTHDAY ABHINAW!";
  }
},1000);






var istatus=document.querySelector("h2");
var bulb1=document.querySelector(".b2");
var bulb2=document.querySelector(".b21");
var link=document.querySelector("#bt");
var b=document.querySelector("section");
var addfriend=document.querySelector("#add");
var cheak=0;
addfriend.addEventListener("click",function(){
    if(cheak==0)
    {
    istatus.innerHTML="Friend";
    istatus.style.color="green";
    bulb1.src='burnb.png',
    bulb2.src='burnb.png',
     b.style.backgroundColor="black";
         cheak=1;
    addfriend.innerHTML="Remove";
    }
    else{
      b.style.backgroundColor="rgb(173, 88, 3";
      bulb1.src='bulf.png',
    bulb2.src='bulf.png'
        addfriend.innerHTML="Add friend";
        istatus.innerHTML="Stranger";
        istatus.style.color="red";
        cheak=0;
    }
})
//var removef=document.querySelector("#remove")
var he=document.querySelector("#nav1");
var press=document.querySelector("#rr")
var cheak=0;
press.addEventListener("click",function(){
  
    if(cheak==0){
        he.innerHTML="this is Navbar button";
        cheak=1;
    }
    else{
        he.innerHTML="Hi Its Me Nagesh";
        cheak=0;
    }

})

let redbtn=document.getElementById("red")
let bluebtn=document.getElementById("blue")
let blackbtn=document.getElementById("black")
let newbike=document.getElementById("new-bike")

redbtn.onclick=function(){
    newbike.style.backgroundImage="url(BMW1.png)"
   
}
bluebtn.onclick=function(){
    newbike.style.backgroundImage="url(BMW2.png)"
   
}
blackbtn.onclick=function(){
    newbike.style.backgroundImage="url(BMW3.png)"
   
}
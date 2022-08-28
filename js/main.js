const toTop =document.querySelector(".to-top");
window.addEventListener("scroll",()=>{
if(window.pageYOffset>100){
toTop.classList.add("active");
} else {
    toTop.classList.remove("active");
}

})
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
loader.style.display="none";
});

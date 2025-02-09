// var elem1 = document.querySelector("#elem1");
// var elem1Img = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", (dets)=>{
//     elem1Img.style.left = dets.x + "px";
//     elem1Img.style.top = dets.y + "px";
// })
// elem1.addEventListener("mouseenter", (dets)=>{
//     elem1Img.style.display = "block"; 
// })
// elem1.addEventListener("mouseleave", (dets)=>{
//     elem1Img.style.display = "none"; 
// })

// above complete code is for one element, lets try for all

var elem = document.querySelectorAll(".elem");

elem.forEach((val)=>{
    
    val.addEventListener("mouseenter", (dets)=>{
        val.childNodes[3].style.opacity = 1;
    })

    val.addEventListener("mouseleave", (dets)=>{
        val.childNodes[3].style.opacity = 0;
    })
    
    val.addEventListener("mousemove", (dets)=>{
        val.childNodes[3].style.left = dets.x + "px";
    })
})
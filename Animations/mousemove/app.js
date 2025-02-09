var cursor = document.querySelector(".cursor")

window.addEventListener("mousemove", (dets)=>{
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
})
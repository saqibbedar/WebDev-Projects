window.addEventListener("load", function() {
    var anim = document.getElementById("anim");
    var content = document.getElementById("content");
    var h1 = document.querySelector('#h1');

    this.setTimeout(()=>{
        anim.style.top = "-100%";
        content.style.display = "block";
        h1.classList.add("h1-active");
    }, 3000);
});

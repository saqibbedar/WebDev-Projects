const inputKey = document.getElementById("inpKey");
const inputValue = document.getElementById("inpValue");
const insertButton = document.getElementById("insertButton");
const output = document.querySelector(".output");

insertButton.addEventListener("click", ()=>{
    const key = inputKey.value;
    const value = inputValue.value;
    if(!key && !value){
        alert("Please! fill the details properly.")
    }
    else{
        localStorage.setItem(key, value);
        location.reload();
    }
})

if (localStorage.length <= 0) {
  output.innerHTML = "Nothing found, please enter some values to get Started!";
}

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    output.innerHTML += `<p class="box">${key}: ${value}</p>`;
}
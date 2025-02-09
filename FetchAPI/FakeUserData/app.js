const dataContainer = document.querySelector("[data-container]");
const heading = document.getElementById("fixedHeading");

window.addEventListener("scroll", ()=>{
    let scrolled = window.scrollY;
    if(scrolled > 100){
        heading.classList.add("fixed");
        dataContainer.style.marginTop = 78 + "px";
    }
    else {
        heading.classList.remove("fixed");
        dataContainer.style.marginTop = 0;
    }
});


const fetchData = async ()=>{
    try {
    const response = await fetch("https://raw.githubusercontent.com/saqibbedar/fake-user-data-api/main/data.json");
    if(!response.ok){
        throw new Error("Error while fetching data");
    }
    const data = await response.json();

    data.forEach((user)=>{

        const cloneUser = dataContainer.cloneNode(true).children[0];
        cloneUser.classList.remove("hide")
        const header = cloneUser.querySelector(".username");
        const body = cloneUser.querySelector(".email");
        const category = cloneUser.querySelector(".category");

        header.textContent = user.name;
        body.textContent = user.email;
        category.textContent = user.category;


        dataContainer.append(cloneUser);

    })
    }
    catch(error){
        console.error(error);
    }
}
fetchData();

 // other way to do it

        // const users = document.createElement("div");
        // users.classList.add("users");
        // const header = document.createElement("div");
        // header.classList.add("username");
        // const body = document.createElement("div");
        // body.classList.add("email");
        // header.textContent = user.name;
        // body.textContent = user.email;
        // users.append(header);
        // users.append(body);
        // dataContainer.append(users);
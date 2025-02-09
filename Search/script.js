const dataCardsTemplate = document.querySelector("[data-cards-template]");
const dataCardContainer = document.querySelector("[data-card-container]");
const searchInput = document.querySelector("[data-search]");
const searchContainer = document.querySelector("[data-search-container]");

let users = [];

searchInput.addEventListener("input", (e)=>{
    const value = e.target.value.toLowerCase();
    users.forEach((user)=>{
        const isVisible = user.name.toLowerCase().includes(value) || user.email.toLowerCase().includes(value) || user.category.toLowerCase().includes(value);
        user.element.classList.toggle("hide", !isVisible);
    })
})

const fetchData = async ()=>{
    try {
        const response = await fetch("https://raw.githubusercontent.com/saqibbedar/fake-user-data-api/main/data.json");
        if(!response.ok){
            throw new Error("Error while fetching data.");
        }
        const data = await response.json();
        users = data.map(user => {
            const dataCard = dataCardsTemplate.content.cloneNode(true).children[0];
            const header = dataCard.querySelector("[data-header]");
            const body = dataCard.querySelector("[data-body]");
            const category = dataCard.querySelector("[data-category]");

            header.textContent = user.name;
            body.textContent = user.email;
            category.textContent = user.category;

            dataCardContainer.append(dataCard);
            return {name: user.name, email: user.email, category: user.category, element: dataCard};
        });
    } catch (error) {
        console.error(error);
    }
} 
fetchData()  

// other way to do it

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res) => res.json())
// .then(data => {
//     console.log(data)
//     users = data.map(user => {
//         const dataCard = dataCardsTemplate.content.cloneNode(true).children[0];
//         const header = dataCard.querySelector("[data-header]");
//         const body = dataCard.querySelector("[data-body]");
//         header.textContent = user.name;
//         body.textContent = user.email;
//         dataCardContainer.append(dataCard);
//         return {name: user.name, email: user.email, element: dataCard}
//     });
// })
// .catch(error => console.error("Error: ", error))
// LocalStorage: Storage provided by browser

// Methods

// setItem(): setItem takes two parameters, first one is key and second is value.

// Example -
localStorage.setItem("Name", "Saqib Bedar"); // it will save the data into local storage, even if we refresh the page but still it exist there till the life of our browser.

// removeItem(): it is used to remove the item from local storage, it requires a key as a parameter which will locate the data and it will remove it completely

// Example -
localStorage.removeItem("Name"); // Name Saqib Bedar will no more exist as it is removed completely

// getItem(): It will return the value when a key is passed to it.

// Example -
localStorage.setItem("age", "30"); // Note: here we have to give value and key both in string, even we are dealing with the numbers, if we won't pass numbers in string then javaScript will convert it into string, so it is good to wrap it in string too.

localStorage.setItem("name", "Saqib Bedar");

let getItem = localStorage.getItem("name"); // getItem will take key and return its value, so in this example name which is key will return value "Saqib Bedar".

console.log(getItem); 

// Key: it uses indexes to return value

// Example -

let getItem2 = localStorage.key(1); // it will return the age

console.log(getItem2);

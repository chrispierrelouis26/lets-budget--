
//OBJECT DESTRUCTERING 

// const person = {
//     name: "chris",
//     age: 27,
//     location :{
//         city: "Menifee",
//         temp: 55
//     }
// }


// const {name: firstName = "anonymous" , age } = person;
// console.log(`${firstName} is ${age} .`);


// const {city, temp: tempeture} = person.location
// if(city && tempeture){
//     console.log(`Its ${tempeture} in ${city}`);
// }

// const book = {
//     title: "ego",
//     author: "brian holiday",
//     publisher: {
//         name: "penguin"
//     }
// };

// const {name: publisherName = "self-published"} = book.publisher

// console.log(publisherName);


// ARRAY DESTRUCTERING 

// const address =["29735 cottonwood Cove drive", "Menifee", "California", "92584"];


// const [, city, state = "New York", ] = address;
// console.log(`you are in ${[city]} ${state}`);



const item = ["Pizza", "$2.00", "$2.50", "$3.00"];
const [itemName, , mediumPrice, largePrice] = item;

console.log(`A medium ${itemName} cost ${mediumPrice} and a large cost ${largePrice}`)
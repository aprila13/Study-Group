//Grabbing elements
// let search = document.getElementById('search'),
//     submit = document.getElementById('submit'),
//     drinkName = document.getElementById('drinkName'),
//     directions = document.getElementById('directions'),
//     needed = document.getElementById('needed'),
//     one = document.getElementById('one'),
//     two = document.getElementById('two'),
//     three = document.getElementById('three');


//     submit.addEventListener('click', getDrink)

//     var myHeaders = new Headers();
//     myHeaders.append("Cookie", "__cfduid=d354e8c66446965133da840d1d57820451615506517");

//     var requestOptions = {
//       method: 'GET',
//       headers: myHeaders,
//       redirect: 'follow'
//     };

//     function getDrink(event) {
//       event.preventDefault();
//       let drink = search.value;

//       fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`, requestOptions)
//       .then(response => response.json())
//       .then(result => {
//         console.log(result)
//         drinkName.innerHTML = result.drinks[0].strDrink;
//         directions.innerHTML = result.drinks[0].strInstructions;
//         one.innerHTML = result.drinks[0].strIngredient1;
//         two.innerHTML = result.drinks[0].strIngredient2;
//         three.innerHTML = result.drinks[0].strIngredient3;
//         needed.style.visibility = 'visible';
//       })
//       .catch(error => console.log('error', error));
//     }


// //Function declaration
// function myName(params){
//   //Do something
//   console.log('Hello')
// }
//  //call function
//  myName(argument)
    

//Function declaration
// function myName() {
//   //Do something
//   return 'Hello';
// }
// //call function
// console.log(myName())

let dogs = 'true';
console.log(typeof dogs)
const main = document.getElementById('main-container');
const template = document.getElementById('book-template');
const bookContainer = document.getElementById('book-container');
const movieTemplate = document.getElementById('movie-template');
export function getBookNames(arr){
 
    bookContainer.innerHTML=` `

  arr.forEach((name)=>{

  let content = template.content.cloneNode(true);
  content.querySelector('p').textContent= name.name;
  content.querySelector('img').src=name.src
  bookContainer.appendChild(content)



  });
 
}


export function getMovieNames(arr){
 
  bookContainer.innerHTML=` `

arr.forEach((name)=>{

let content = movieTemplate.content.cloneNode(true);
content.querySelector('p').textContent= name.name;
content.querySelector('img').src=name.src;
content.querySelector('img').alt=name.alt;
content.querySelector('img').setAttribute('class','movie-class')

let li= document.createElement('li');
let li2= document.createElement('li');
let li3= document.createElement('li');
let li4= document.createElement('li');
let li5= document.createElement('li');
li.textContent = name.runtimeInMinutes
li2.textContent = name.budgetInMillions
li3.textContent = name.rottenTomatoesScore
li4.textContent = name.boxOfficeRevenueInMillions
li5.textContent = name.academyAwardNominations




content.querySelector('ul').appendChild(li)
content.querySelector('ul').appendChild(li2)
content.querySelector('ul').appendChild(li3)
content.querySelector('ul').appendChild(li4)
content.querySelector('ul').appendChild(li5)
console.log(name)
bookContainer.appendChild(content)



});

}
const main = document.getElementById('main-container');
const template = document.getElementById('book-template');
const bookContainer = document.getElementById('book-container');
const movieTemplate = document.getElementById('movie-template');
const characterTemplate = document.getElementById('character-template');
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

export function getMainCharacters(arr){
    let mainArr=[]
arr.forEach((main)=>{
// console.log(main)
if(main.name==='Aragorn II Elessar'){
  // console.log(main)
  mainArr.push(main)
}else if (main.name=='Boromir'){
  // console.log(main)
  mainArr.push(main)
}else if(main.name=='Gandalf'){
  // console.log(main)
  mainArr.push(main)
}else if(main.name=='Legolas'){
  // console.log(main)
  mainArr.push(main)
}else if(main.name=='Gimli'){
  // console.log(main)
  mainArr.push(main)
}else if(main.name=='Frodo Baggins'){
  // console.log(main)
  mainArr.push(main)
}else if(main.name=='Samwise Gamgee'){
  // console.log(main)
  mainArr.push(main)
}else if(main.name=='Merimas Brandybuck'){
  // console.log(main)
  mainArr.push(main)
}else if(main.name=='Peregrin Took'){
  // console.log(main)
  mainArr.push(main)
}

});
console.log(mainArr)
return mainArr
}

export function createMainCharacters(arr){
  bookContainer.innerHTML=` `

arr.forEach((name)=>{

let content = movieTemplate.content.cloneNode(true);
content.querySelector('p').textContent= name.name;
content.querySelector('img').src=name.src;
content.querySelector('img').alt=name.alt;
content.querySelector('img').setAttribute('class','character-class')

let li= document.createElement('li');
let li2= document.createElement('li');
let li3= document.createElement('li');
let li4= document.createElement('li');
let a= document.createElement('a');

li.textContent = name.name
li2.textContent = name.height
li3.textContent = name.race
li4.textContent = name.realm
a.textContent = name.wikiUrl
a.setAttribute('href',name.wikiUrl)



content.querySelector('ul').appendChild(li)
content.querySelector('ul').appendChild(li2)
content.querySelector('ul').appendChild(li3)
content.querySelector('ul').appendChild(li4)
content.querySelector('ul').appendChild(a)

bookContainer.appendChild(content)



});
}
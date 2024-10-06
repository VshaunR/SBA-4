import * as helper from './helper.mjs'
import * as image from './image.mjs'

const url =`https://the-one-api.dev/v2`;
const headers={
  Accept:'application/json',
  Authorization:'Bearer l9VNVBx3WbbYbwy6T89a'

}








 const theBooks = document.getElementById('Books');
 const theMovies = document.getElementById('Movies');
 const  mainCharacters = document.getElementById('Main-Characters')
let main = document.getElementById('main-container');
 theBooks.addEventListener('click',(e)=>{
  e.preventDefault();
  getBooks()
  console.log('click')
 });

 theMovies.addEventListener(('click'),(e)=>{
  e.preventDefault();

  getMovies();
 });

 mainCharacters.addEventListener(('click'),(e)=>{
  e.preventDefault();

  getCharacters();
 });



async function getBooks(){


  try{
     
      const response = await fetch(` https://the-one-api.dev/v2/book`,{
        headers:{
            Accept:'application/json',
            Authorization:'Bearer l9VNVBx3WbbYbwy6T89a'
        }
      });
     
      if(!response.ok){
        throw new Error(`Response statuse : ${response.status}`)
      }

      const meal = await response.json();
    
      console.log(meal.docs)
      for(let i in image.bookImage){
        meal.docs[i].src = image.bookImage[i].src;
        meal.docs[i].alt =image.bookImage[i].alt;
      }
      console.log(meal.docs)
      helper.getBookNames(meal.docs)
    }catch(err){
      console.log(err)
    }
};

async function getMovies() {
  
  try{
     
    const response = await fetch(`${url}/movie`,{
      headers:{
        Accept:'application/json',
        Authorization:'Bearer l9VNVBx3WbbYbwy6T89a'
      
      }
    });
   
    if(!response.ok){
      throw new Error(`Response statuse : ${response.status}`)
    }

    const movie = await response.json();
  
    console.log(movie.docs)
    for(let i in image.movieImage){
      movie.docs[i].src = image.movieImage[i].src;
      movie.docs[i].alt =image.movieImage[i].alt;
    }
    // console.log(movie.docs)
   helper.getMovieNames(movie.docs)
  }catch(err){
    console.log(err)
  }

}





async function getCharacters() {
  
  try{
     
    const response = await fetch(`${url}/character`,{
      headers:{
        Accept:'application/json',
        Authorization:'Bearer l9VNVBx3WbbYbwy6T89a'
      
      }
    });
   
    if(!response.ok){
      throw new Error(`Response statuse : ${response.status}`)
    }

    const characters = await response.json();
    let theMainCharacters = helper.getMainCharacters(characters.docs)
    // console.log(characters.docs)
    for(let i in image.characterImage){
      theMainCharacters[i].src = image.characterImage[i].src;
      theMainCharacters[i].alt =image.characterImage[i].alt;
    }
    // console.log(theMainCharacters)
    helper.createMainCharacters(theMainCharacters)
  }catch(err){
    console.log(err)
  }

}
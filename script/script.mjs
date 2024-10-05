import * as helper from './helper.mjs'
import * as image from './image.mjs'

const url =`https://the-one-api.dev/v2`;
const headers={
  Accept:'application/json',
  Authorization:'Bearer l9VNVBx3WbbYbwy6T89a'

}








 const theBooks = document.getElementById('Books');
 const theMovies = document.getElementById('Movies');
let main = document.getElementById('main-container');
 theBooks.addEventListener('click',(e)=>{
  e.preventDefault();
  getBooks()
  console.log('click')
 })

 theMovies.addEventListener(('click'),(e)=>{
  e.preventDefault();

  getMovies();
 })

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
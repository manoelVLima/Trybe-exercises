const fs = require('fs').promises;
const path = require('path');

async function readMoviesFile() {
  try {
    const moviesRoute = path.resolve(__dirname,'movies.json')
    const response = await fs.readFile(moviesRoute);
    const data = await JSON.parse(response);

    return data;   
  } catch (error) {
    console.log('Filmes não encontrados',error);
  }
  
}

async function getMovieById(id) {  
  const moviesRoute = path.resolve(__dirname,'movies.json')
  const response = await fs.readFile(moviesRoute);
  const data = await JSON.parse(response);
  try {
    const movieFilteredById = data.filter((movie) => movie.id === Number(id))
    return movieFilteredById;
    
  } catch (error) {
    console.log('Filtro não encontrado',error);
  }
}
module.exports = {
  readMoviesFile,
  getMovieById
}
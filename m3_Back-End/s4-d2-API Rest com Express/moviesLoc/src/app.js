const express = require('express');
const { read } = require('fs');
const fs = require('fs').promises;
const path = require('path');
const { readMoviesFile, getMovieById } = require('./moviesFunctions');

const app = express();

app.use(express.json());

app.get('/movies/search', async (req,res) => {
  try {
    const { q } = req.query;
    const movies = await readMoviesFile();

    if(q) {
      const filteredMovies = movies.filter((movie) => movie.movie.includes(q)) 
      return res.status(200).json({filteredMovies});
    }
  } catch (error) {
    res.status(500).send(({message: error.message}))
  }
})

app.get('/movies', async (req,res) => {
  const movies = await readMoviesFile();

  return res.status(200).json({ movies });
})

app.get('/movies/:id', async (req,res) => {
  const { id } = req.params;
  const movies = await getMovieById(id);

  if(movies.length === 0) return res.status(404).json(({message:'Movie not found!'}))

  return res.status(200).json({ movies: movies });
})

app.post('/movies', async (req,res) => {
  const { movie, price } = req.body;
  const movies = await readMoviesFile();

  const newMovie = {
    id: movies.length + 1,
    movie,
    price
  }

  const allMovies = JSON.stringify([...movies,newMovie]);
  
  const moviesRoute = path.resolve(__dirname,'movies.json')
  await fs.writeFile(moviesRoute,JSON.stringify([...movies,newMovie]));

  return res.status(201).json(allMovies);
})

app.put('/movies/:id', async (req,res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const movies = await readMoviesFile();
  const updateMovie = movies.find((movie) => movie.id === Number(id));

  updateMovie.movie = movie;
  updateMovie.price = price;

  movies[Number(id)-1] = {
    id: updateMovie.id,
    movie,
    price
  }
  
  const moviesRoute = path.resolve(__dirname,'movies.json')
  await fs.writeFile(moviesRoute,JSON.stringify(movies));
  return res.status(200).json(updateMovie);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMoviesFile();

  const removeMovie = movies.filter((movie) => movie.id !== Number(id));

  const moviesRoute = path.resolve(__dirname,'movies.json')
  await fs.writeFile(moviesRoute,JSON.stringify(removeMovie));
  return res.status(200).json(removeMovie);
})

module.exports = app;
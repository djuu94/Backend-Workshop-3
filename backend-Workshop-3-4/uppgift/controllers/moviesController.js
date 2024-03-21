const Movie = require('../models/Movie');

exports.getAllMovies = (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.createMovie = (req, res) => {
  const newMovie = new Movie({ title: req.body.title });
  newMovie.save()
    .then(movie => res.json(movie))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateMovie = (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true })
    .then(movie => res.json(movie))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Movie deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};
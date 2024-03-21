const Director = require('../models/Director');

exports.getAllDirectors = (req, res) => {
  Director.find()
    .populate('movies')
    .then(directors => res.json(directors))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.createDirector = (req, res) => {
  const newDirector = new Director({
    name: req.body.name,
    movies: req.body.movies
  });

  newDirector.save()
    .then(director => res.json(director))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.updateDirector = (req, res) => {
  Director.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    movies: req.body.movies
  }, { new: true })
    .then(director => res.json(director))
    .catch(err => res.status(500).json({ error: err.message }));
};

exports.deleteDirector = (req, res) => {
  Director.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Director deleted successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
};
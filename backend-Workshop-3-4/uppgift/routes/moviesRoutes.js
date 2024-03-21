const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/my-movies', moviesController.getAllMovies);
router.post('/my-movies', moviesController.createMovie);
router.put('/my-movies/:id', moviesController.updateMovie);
router.delete('/my-movies/:id', moviesController.deleteMovie);

module.exports = router;
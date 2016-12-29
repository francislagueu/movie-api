'use strict';

const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.get('/', function(req, res, next){
     Movie.find({}).exec(function(err, movies){
        if(err){
            res.send(err);
        }
        res.status(200).send({
            data: movies
        });
    });
});

router.get('/movies', function(req, res, next){
   Movie.find({}).exec(function(err, movies){
        if(err){
            res.send(err);
        }
        res.status(200).send({
            data: movies
        });
    });
});

router.get('/movies/:id', function(req, res, next){
    Movie.findOne({_id: req.params.id}, function(err, movie){
        if(err){
            res.send(err);
        }
        res.status(200).send(movie);
    });
});

router.get('/create', function(req, res, next){
    res.render('movies/create', []);
});

router.post('/movies', function(req, res, next){
    let movie = new Movie({
        name:req.body.name,
        release_date: req.body.release_date,
        director: req.body.director
    });

    movie.save(function(err, movie){
        if(err){
            res.send(err)
        }
        res.status(200).send(movie);
    });
});

router.put('/movies/:id', function(req, res, next){
    Movie.findOne({_id: req.params.id}, function(err, movie){
        if(err){
            res.send(err);
        }

        let data = {
            name: req.body.name,
            release_date: req.body.release_date,
            director: req.body.director
        };

        Movie.update(movie, data, function(err, updatedMovie){
            if(err){
                res.send(err);
            }
            res.status(200).send(updatedMovie);
        });
    });
});

router.delete('/movies/:id', function(req, res, next){
    Movie.remove({_id: req.params.id}, function(err){
        if(err){
            res.send(err);
        }
        res.status(200).send({
            'message': 'Movie ' + req.params.id + ' deleted'
        });
    });
});



module.exports = router;
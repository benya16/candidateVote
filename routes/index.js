var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/candidateService', { useMongoClient: true});

var candidateSchema = mongoose.Schema({
    name: String,
    vote: Number
});

var Candidate = mongoose.model('Candidate', candidateSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to Mongo');
});

router.post('/vote', function(req, res) {
    // console.log(req.body);

    var voteCandidate = new Candidate(req.body);
    console.log(voteCandidate);
    Candidate.findOneAndUpdate({'name': voteCandidate.name}, {$inc: {'vote': 1}}, function (err, post) {
        if(err) return console.error(err);
        res.send(200);
    });
});

router.post('/candidate', function (req, res) {
    var newCandidate = new Candidate(req.body);
    newCandidate.save(function (err, post) {
        if(err) return console.error(err);
        res.sendStatus(200);
    });
});

router.get('/candidates', function (req, res) {
    Candidate.find({}, function (err, results) {
        if(err) return console.error(err);
        // console.log(results);
        res.json(results);
    })
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

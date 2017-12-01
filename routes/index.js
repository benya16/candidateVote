var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/messageService', { useMongoClient: true});

var candidateSchema = mongoose.Schema({
    Name: String,
    Vote: Number
});

var Candidate = mongoose.model('Candidate', messageSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to Mongo');
});

router.post('/vote', function(req, res) {
    console.log(req.body);

    var newCandidate = new Candidate(req.body);
    console.log(newCandidate);
    newCandidate.save(function (err, post) {
        if(err) return console.error(err);
        console.log(post);
        res.sendStatus(200);
    });
});


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var request = require('request');

var app = express();
var router = express.Router();

router.get( '/', function( req, res ) {

    console.log( __dirname );
    console.log( '_____________________________' );
    res.sendFile( path.join(__dirname+'/index.html'));
});

router.post( '/get-vote-info', function( req, res ) {

    var voterInfoPromise = new Promise(function ( resolve, reject ) {

    });


    console.log( req.body.address);
    console.log( '_____________________________' );
    res.send({'data':'success'})
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( router );
app.use("/", express.static(__dirname + '/'));

app.listen( 7000, function(){
    console.log( 'application running at port 7000' );
});

var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var request = require('request');
var _ = require('underscore');

var app = express();
var router = express.Router();

var API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E';
var endURL = '&key='+ API_KEY;
var baseURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address=';
//example : https://www.googleapis.com/civicinfo/v2/representatives?address=1184+normandy+drive+cambpell+ca+95008&key={YOUR_API_KEY}

router.get( '/', function( req, res ) {

    console.log( __dirname );
    console.log( '_____________________________' );
    res.sendFile( path.join(__dirname+'/index.html'));
});

router.post( '/get-vote-info', function( req, res ) {

    // var voterInfoPromise = new Promise(function ( resolve, reject ) {
    //
    // });
    var address = req.body.address.split(' ').join('+');
    var fullURL = baseURL+address+endURL;

    console.log( fullURL);
    console.log( '_____________________________' );
    request(fullURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("NAILED IT\n\n");
            console.log(body); // Show the HTML for the Google homepage.
            console.log("NAILED IT\n\n");
        }
    });


    res.send({'data':'success'})
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( router );
app.use("/", express.static(__dirname + '/'));

app.listen( 7000, function(){
    console.log( 'application running at port 7000' );
});

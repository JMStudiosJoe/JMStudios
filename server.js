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
//https://www.googleapis.com/civicinfo/v2/elections?key=<YOUR_API_KEY>

var debugMessageLine = function(message) {
    console.log( '\n\n_____________________________________'+ message+'_____________________________________\n\n' );
};
var debugBlankLine = function() {
    console.log( '\n\n__________________________________________________________________________\n\n' );
};
router.get( '/', function( req, res ) {

    res.sendFile( path.join(__dirname+'/index.html'));
});

router.post( '/get-vote-info', function( req, res ) {

    // var voterInfoPromise = new Promise(function ( resolve, reject ) {
    //
    // });
    var address = req.body.address.split(' ').join('+');
    var fullURL = baseURL+address+endURL;

    request(fullURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var allData = JSON.parse(response.body);


            var divisions = allData['divisions'];
            var officials = allData['officials'];
            var offices = allData['offices'];



             var responseData = {
                divisions: divisions,
                officials: officials,
                offices: offices
            };

            res.send(responseData);
        }
    });



});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( router );
app.use("/", express.static(__dirname + '/'));

app.listen( 7000, function(){
    console.log( 'application running at port 7000' );
});

var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var request = require('request');
var requestPromise = require('request-promise');
var _ = require('underscore');

var app = express();
var router = express.Router();

var API_KEY = 'AIzaSyCWhwRupMs7IeE4IrGEgHtT0Nt-IGZnP9E';
var endURL = '&key='+ API_KEY;
var baseRepURL = 'https://www.googleapis.com/civicinfo/v2/representatives?address=';
var baseElectionsURL = 'https://www.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true';
var baseDivisionsURL = 'https://www.googleapis.com/civicinfo/v2/divisions?query=';
//https://content.googleapis.com/civicinfo/v2/divisions?query=1184%20normandy%20dr%20campbell%20ca%2093402&alt=json
//example : https://www.googleapis.com/civicinfo/v2/representatives?address=1184+normandy+drive+cambpell+ca+95008&key={YOUR_API_KEY}
// moar info: https://content.googleapis.com/civicinfo/v2/representatives?address=1184%20normandy%20drive&includeOffices=true&alt=json&key=
//https://www.googleapis.com/civicinfo/v2/elections?key=<YOUR_API_KEY>
//https://content.googleapis.com/civicinfo/v2/elections?alt=json&prettyPrint=true&key=

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
    var fullRepURL = baseRepURL+address+endURL;
    var fullElectionsURL = baseElectionsURL+address+endURL;
    var fullDivisionsURL = baseDivisionsURL+address+endURL;

    requestPromise(fullRepURL).then(
        function successCallback(response, body) {
            var allData = JSON.parse(response);
            var divisions = allData['divisions'];
            var officials = allData['officials'];
            var offices = allData['offices'];
            var responseData = {
                divisions: divisions,
                officials: officials,
                offices: offices

            };
            requestPromise(fullElectionsURL).then(
                function successCallback(response, body) {
                    var allElectionData = JSON.parse(response);
                    console.log(allElectionData);
                    responseData['elections'] = allElectionData;
                    console.log("--------------------------------")


                    requestPromise(fullDivisionsURL).then(
                        function successCallback(response, body) {
                            var allDivionData = JSON.parse(response);
                            console.log(allDivionData);
                            responseData['divisions'] = allDivionData;
                            console.log("--------------------------------")
                            res.send(responseData);

                        },
                        function failedCallback(error) {
                            console.log(error);
                        }
                    );




                },
                function failedCallback(error) {
                    console.log(error);
                }
            );


        },
        function failedCallback(error) {
            console.log(error);
        }
    );





});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use( router );
app.use("/", express.static(__dirname + '/'));

app.listen( 7000, function(){
    console.log( 'application running at port 7000' );
});

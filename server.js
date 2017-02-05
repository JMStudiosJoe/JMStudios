var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var router = express.Router();

router.get( '/', function( req, res ) {

    console.log( __dirname );
    console.log( '_____________________________' );
    res.sendFile( path.join(__dirname+'/index.html'));
});
router.post( '/get-vote-info', function( req, res ) {

    console.log( req.headers );
    console.log( '_____________________________' );
    console.log( req.body);
    console.log( '_____________________________' );
    res.send({'data':'success'})
});


///get-vote-info
app.use( router );
app.use("/", express.static(__dirname + '/'));
app.listen( 7000, function(){
    console.log( 'application running at port 7000' );
} );

var express = require( 'express' );
var path = require( 'path' );

var app = express();


var router = express.Router();

router.get( '/', function( req, res ) {

    console.log( __dirname );
    console.log( '_____________________________' );
    res.sendFile( path.join(__dirname+'/app/views/index.html'));
});

app.use( router );
app.use("/", express.static(__dirname + '/'));
app.listen( 7000, function(){
    console.log( 'application running at port 7000' );
} );

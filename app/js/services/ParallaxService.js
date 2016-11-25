(function(){
    var app = angular.module('jmstudios-app.ParallaxService',[])
//factories get ingeted so no need to instantiate one where as a .service would need to initial in every controller used
    .factory('ParallaxService', function() {

        var parallaxImageNames = ['bamboo-forest-by-rolf-hartbrich.jpg','jmstudiosbackground.jpg','milky-way.jpg','space-background.jpg','space-earth-stratosphere-wallpaper-1.jpg', 'water-drop-wallpaper-3edit.jpg']
        var self = this;
        return {

            getImageName() {
                var index = Math.floor( Math.random() * 100000 ) % parallaxImageNames.length;
                return parallaxImageNames[index];
            }
        };


    });
})();

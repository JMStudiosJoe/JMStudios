(function(){
    var app = angular.module('jmstudios-app.ParallaxService',[])
//factories get ingeted so no need to instantiate one where as a .service would need to initial in every controller used
    .factory('ParallaxService', function() {

        var parallaxImageNames = ['bamboo-forest-by-rolf-hartbrich','jmstudiosbackground','milky-way','space-background','space-earth-stratosphere-wall', 'water-drop-wallpaper-3edit']
        var self = this;
        return {

            getImageName() {
                console.log("wow we got the factory service connected");
                var index = Math.floor( Math.random() ) % self.parallaxImageNames.length;
                return self.parallaxImageNames[index];
            }
        };


    });
})();

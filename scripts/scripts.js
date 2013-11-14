$.when(
	// Add ability to nix these individually
    $.getScript( "http://code.jquery.com/ui/1.10.3/jquery-ui.js" ),
    $.getScript( "http://code.jquery.com/jquery-migrate-1.2.1.js" ),
    $.getScript( "http://images.wsu.edu/spine/1/1.0/scripts/modernizr/modernizr.custom.64252.js" ),
    
    // Devs, change your scripts uri to wherever yours is located
    $.getScript( "http://nbj.me/spine/1/1.0/scripts/spine.js" ),
    
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){

    //place your code here, the scripts are all loaded

});
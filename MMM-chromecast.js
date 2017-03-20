/* Magic Mirror
 * Module: MMM-chromecast
 *
 * By flo
 * MIT Licensed
  */

Module.register("MMM-chromecast", {

    getScripts: function() {
    	return ["//www.gstatic.com/cv/js/sender/v1/cast_sender.js","casting.js"];
    },

    notificationReceived: function(notification, payload, sender) {
	if (notification === "DOM_OBJECTS_CREATED") {
	    //Note: should react to window event but event listeners don't work
	    initializeCastApi();
	}
    },
    
    getDom: function() {
	var wrapper = document.createElement('div');
	return wrapper;
    }    
});

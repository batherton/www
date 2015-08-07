
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    //onSuccess: function(position) {
	//	document.getElementById('AppLoading').style="display:none;";
	//	document.getElementById('AppLoading').className="AppLoaded";
	//	document.getElementById('Latitude').value = position.coords.latitude;
	//	document.getElementById('Longitude').value = position.coords.longitude;
	//	document.getElementById('Altitude').value = position.coords.altitude;
	//	document.getElementById('Accuracy').value = position.coords.accuracy;
	//	document.getElementById('AltitudeAccuracy').value = position.coords.altitudeAccuracy;
	//	document.getElementById('Heading').value = position.coords.heading;
	//	document.getElementById('Speed').value = position.coords.speed;
	//	document.getElementById('Timestamp').value = position.timestamp;
	//},

	//onError: function(error) {
		//alert('Please Enable Location Services');
	    //alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
	//},

	//OnDevicePlatformSuccess: function(){
	//	document.getElementById('DeviePlatform').value = device.platform;
	//},
	//OnDevicePlatformError: function(error){
	//		alert(error);
	//},


    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//alert('Device Ready');
		//navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
		//document.getElementById('DevicePlatform').value = device.platform;
		//document.getElementById('DeviceID').value = device.uuid;
		//document.getElementById('DeviceModel').value = device.model;
		//document.getElementById('DeviceVersion').value = device.version;
		OnLoadActions();
		//navigator.notification.vibrate();
		app.receivedEvent('deviceready');


    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);

    }
};

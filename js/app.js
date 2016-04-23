'use strict';

var app = angular.module('chatApp', []);

app.factory('socket', function($rootScope){
	var ws = new WebSocket("ws://127.0.0.1:8080");
	ws.onmessage = function (event) {
		var response;
	    try {
	        response = angular.fromJson(event.data);
	    } catch (e) {
	        //document.getElementById("helloId").innerHTML = "Sorry, connection failed ...";
	        //document.getElementById("btnAtpId").disabled = false;
	        console.log('error: ', e);
	        response = {'error': e};
	    }
	    
	    console.log(response);
	    
	    if(response.data) {}
	};
	
	ws.onopen = function() {};
	ws.onclose = function() {};
	ws.onerror = function(error) {};
	
	return {
		status: function() { return ws.readyState },
		send: function(message) {
			if(angular.isString(Message)) {
				ws.send(message);
			}else if(angular.isObject(message)){
				ws.send(JSON.stringify(message));
			}
		}
	};
});

app.controller('chatController', function($scope, socket) {
    $scope.sendMessage = function() {
        console.log('send message');
        console.log(socket.status());
    }
});
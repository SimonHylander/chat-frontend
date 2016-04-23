'use strict';

var app = angular.module('chatApp', []);
app.controller('chatController', function($scope){
    $scope.sendMessage = function() {
        console.log('send message');
    }
});

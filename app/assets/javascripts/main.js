//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://coffeescript.org/
//= require_self
//= require_tree ./services/main
//= require_tree ./controllers/main


Blog = angular.module('Blog',['ngRoute'])
.config(["$httpProvider", function(provider){
  provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}])
//# Sets up routing
.config(function ($routeProvider) {
  //# Route for '/post'
  $routeProvider.when('/post/new', { templateUrl: '../assets/mainCreatePost.html', controller: 'CreatePostCtrl' } )
                .when('/post/:postId/edit', { templateUrl: '../assets/mainCreatePost.html', controller: 'EditPostCtrl' } )
                .when('/post/:postId', { templateUrl: '../assets/mainPost.html', controller: 'PostCtrl' } )                 
                //# Default
                .otherwise({ templateUrl: '../assets/mainIndex.html', controller: 'IndexCtrl' })
});
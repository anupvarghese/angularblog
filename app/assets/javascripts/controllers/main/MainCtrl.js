MainCtrl = function($scope,$location, postData){
  $scope.newPost = function(){
    $location.url('/post/new');
  };
};
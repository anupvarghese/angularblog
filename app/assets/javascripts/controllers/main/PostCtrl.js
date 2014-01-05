PostCtrl = function($scope, $routeParams, postData){
  $scope.index = $routeParams.postId;
  //$scope.post = postData.allposts[$routeParams.postId];
  postData.GetPost($scope.index).then(function(post){
    $scope.post = post.data;
    console.log(post.data);
  });
  
};
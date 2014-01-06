PostCtrl = function($scope, $routeParams,$location, postData){
  $scope.index = $routeParams.postId;
  postData.GetPost($scope.index).then(function(post){
    $scope.post = post;
    console.log(post);
  },function(error){ //promise failure
    $scope.post = [{title: 'Error while loading post...', content: ''}];
  });
  
  $scope.editPost = function(){
    $location.url('/post/'+this.post.id+'/edit');
  };
};
EditPostCtrl = function($scope,$location,postData,$routeParams){
  $scope.formData = {
    postId: '',
    newPostTitle: '',
    newPostContents: ''
  };
  $scope.action = "Edit";
  $scope.verb = " existing ";
  $scope.index = $routeParams.postId;
  postData.GetPost($scope.index).then(function(post){
    $scope.formData.postId = $scope.index;
    $scope.formData.newPostTitle = post.title;
    $scope.formData.newPostContents = post.content;
    console.log(post);
  },function(error){ //promise failure
    $scope.post = [{title: 'Error while loading post...', content: ''}];
  });
  
  $scope.clearPost = function(){
    $scope.formData.newPostTitle = '';
    $scope.formData.newPostContents = '';
  };
    
  $scope.doPost = function(){
    postData.PutPost($scope.formData);
    $location.url('/posts');
  };  
};
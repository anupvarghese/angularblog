CreatePostCtrl = function($scope,$location,postData){
  $scope.action = "Create";
  $scope.verb = " new ";
  $scope.formData = {
    newPostTitle: '',
    newPostContents: ''
  };
  
  $scope.clearPost = function(){
    $scope.formData.newPostTitle = '';
    $scope.formData.newPostContents = '';
  };
    
  $scope.doPost = function(){
    postData.NewPost($scope.formData);
    $location.url('/posts');
  };  
};
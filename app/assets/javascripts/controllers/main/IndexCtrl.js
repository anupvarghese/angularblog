IndexCtrl = function($scope,$location,postData){
  $scope.posts = postData.allposts;
  console.log("before call");      
  postData.LoadPosts().then(function(posts){ //promise success
    $scope.posts = posts;
  },function(error){ //promise failure
    $scope.posts = [{title: 'Error while loading posts...', content: ''}];
  });
  console.log("after call");
  $scope.viewPost = function(){
     $location.url('/post/' + this.post.id);
  };
  $scope.newPost = function(){
    $location.url('/post/new');
  };
};

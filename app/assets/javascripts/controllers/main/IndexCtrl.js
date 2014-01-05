IndexCtrl = function($scope,$location,postData){
  $scope.posts = postData.allposts;
  console.log("before call");      
  postData.LoadPosts().then(function(posts){
    $scope.posts = posts.data;
  });
  console.log("after call");
  $scope.viewPost = function(){
     $location.url('/post/' + this.post.id);
  };
};

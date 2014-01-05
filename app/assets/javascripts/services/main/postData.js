Blog.factory('postData',['$http',function(async){
  return {
    allposts : [{title: 'My first post', contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet lobortis vulputate. Ut tempus, orci eu tempor sagittis, mauris orci ultrices arcu, in volutpat elit elit semper turpis. Maecenas id lorem quis magna lacinia tincidunt. In libero magna, pharetra in hendrerit vitae, luctus ac sem. Nulla velit augue, vestibulum a egestas et, imperdiet a lacus. Nam mi est, vulputate eu sollicitudin sed, convallis vel turpis. Cras interdum egestas turpis, ut vestibulum est placerat a. Proin quam tellus, cursus et aliquet ut, adipiscing id lacus. Aenean iaculis nulla justo.'}, {title: 'A walk down memory lane', contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo sem, imperdiet in faucibus et, feugiat ultricies tellus. Vivamus pellentesque iaculis dolor, sed pellentesque est dignissim vitae. Donec euismod purus non metus condimentum porttitor suscipit nibh tempor. Etiam malesuada elit in lectus pharetra facilisis. Fusce at nisl augue. Donec at est felis. Sed a gravida diam. Nunc nunc mi, egestas non dignissim et, porta aliquam ante.'}],
    LoadPosts : function(){
       var posts = async.get('./posts.json')
                        .success(function(data) {
                        console.log("success"); 
                        return data;
                        })
                        .error(function(data) {
                          data = [{title: 'Error while loading posts...', content: ''}];
                          console.log("error"); 
                          return data;
                        });      
       return posts;
    },
    GetPost : function(postId){
      var post = async.get('./posts/' + postId + '.json')
                      .success(function(data){
                      return data;
                      })
                      .error(function(data){
                        data = [{title: 'Error while loading posts...', content: ''}];
                        return data;
                      });
      return post;
    }
  };
}]);

     

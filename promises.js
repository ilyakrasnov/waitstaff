.factory('somePromise', function ($q, $http) {
  return function somePromise(URL){
  var def = $q.defer();
  return $http.get(URL).success(function(data){
  def.resolve(data);
  })
  return def.promise;
  // same as above line
  }
})


.controller('SmeCtrl', function (somePromise) {
  somePromise('http://some-url/')
  .then(function(data){
  return 'bob'
  })
  .then(function(string){
  string === 'bob'
  })
  // .success(function(data, statusCode, headers){
  // return data;
  // })

})

// this is a promise
returnedValue = {
  then: function(){},
  success: function(){},
  error: function(){},
  catch: function(){},
}


// deferred object
def = {
  resolve: function(){},
  reject: function(){},
  promise: {
  then: function(){},
  catch: function(){},
  }
}
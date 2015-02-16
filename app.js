angular.module('waitstaff', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/', {
          templateUrl : 'home.html',
      })
      .when('/new_meal', {
          templateUrl : 'new-meal.html',
          controller : 'mainCtrl'
      })
      .when('/earnings', {
          templateUrl : 'earnings.html',
          controller : 'mainCtrl'
      })
      .when('/error', {
          template : '<p>Error Page Not Found</p>'
      })
      .otherwise('/error');
  }])
  .controller('mainCtrl', ['$scope', function($scope) {

    $scope.avgTip = function(){
      return $scope.earnings.totalTip/$scope.earnings.mealCount || 0;
    };

    var meal = {
      basePrice:"",
      taxRate:"",
      tipPercentage:""
    };

    var  customerCharges = {
      subtotal:"",
      tip:"",
      total:""
    };

    var earnings = {
      totalTip:0,
      mealCount:0
    };

    $scope.calculateCharges = function() {
      $scope.customerCharges.subtotal = $scope.meal.basePrice * ($scope.meal.taxRate / 100 + 1);
      $scope.customerCharges.tip = $scope.customerCharges.subtotal * ($scope.meal.tipPercentage / 100);
      $scope.customerCharges.total = $scope.customerCharges.subtotal + $scope.customerCharges.tip;
    };

    $scope.addEarnings = function() {
      $scope.earnings.totalTip += $scope.customerCharges.tip;
      $scope.avgTip();
    };

    $scope.customerCharges = _.clone(customerCharges);
    $scope.earnings = _.clone(earnings);
    $scope.meal = _.clone(meal);

    $scope.clearForm = function(){
      console.log(meal);
      $scope.meal = _.clone(meal);
      $scope.waiterForm.$setPristine();
    };

    $scope.reset = function() {
      $scope.customerCharges = _.clone(customerCharges);
      $scope.earnings = _.clone(earnings);
      $scope.clearForm();
    };
  }]);


angular.module('waitstaff',[])
  .controller('mainCtrl', ['$scope', function($scope) {

    $scope.avgTip = function(){
      return $scope.earnings.totalTip/$scope.earnings.mealCount || 0;
    };

    $scope.meal = {
      basePrice:"",
      taxRate:"",
      tipPercentage:""
    };

    $scope.customerCharges = {
      subtotal:"",
      tip:"",
      total:""
    };

    $scope.earnings = {
      totalTip:"",
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

    var initialCharges = angular.copy($scope.customerCharges);
    var initialEarnings = angular.copy($scope.earnings);
    var initialMeal = angular.copy($scope.meal);

    $scope.clearForm = function(){
      $scope.meal = initialMeal;
      $scope.waiterForm.$setPristine();
    };

    $scope.reset = function() {
      $scope.customerCharges = initialCharges;
      $scope.earnings = initialEarnings;
      $scope.meal = initialMeal;
      $scope.waiterForm.$setPristine();
    };
  }]);


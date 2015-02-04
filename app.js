angular.module('waitstaff',[])
  .controller('mainCtrl', ['$scope', function($scope) {

    $scope.avgTip = function(){
      return $scope.earnings.totalTip/$scope.earnings.mealCount || 0;
    };

    $scope.meal = {
      basePrice:"",
      taxRate:"",
      tipPercentage:""
    }

    $scope.customerCharges = {
      subtotal:"",
      tip:"",
      total:""
    };

    $scope.earnings = {
      totalTip:0.0,
      mealCount: 0
    };

    $scope.calculateCharges = function() {
      $scope.customerCharges.subtotal = $scope.meal.basePrice * ($scope.meal.taxRate / 100 + 1);
      $scope.customerCharges.tip = $scope.customerCharges.subtotal * ($scope.meal.tipPercentage / 100);
      $scope.customerCharges.total = $scope.customerCharges.subtotal + $scope.customerCharges.tip;
    };

    $scope.addEarnings = function() {
      $scope.earnings.totalTip += $scope.customerCharges.total;
      avgTip();
    };

    var initialCharges = $scope.customerCharges;
    var initialEarnings = $scope.earnings;

    $scope.reset = function() {
      $scope.customerCharges = initialCharges;
      $scope.earnings = initialEarnings;
    };
  }]);


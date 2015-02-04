angular.module('waitstaff',[])
  .controller('mainCtrl', ['$scope', function($scope) {

    $scope.avgTip = function(){
      return $scope.earnings.totalTip/$scope.earnings.mealCount || 0;
    };

    $scope.meal = {
      basePrice:0,
      taxRate:0,
      tipPercentage:0
    }

    $scope.customerCharges = {
      subtotal:0,
      tip:0,
      total:0
    };

    $scope.earnings = {
      totalTip:0.0,
      mealCount: 0
    };

    $scope.calculateCharges = function() {
      $scope.customerCharges.subtotal = $scope.meal.basePrice * $scope.taxRate
      $scope.customerCharges.tip = $scope.customerChargessubtotal * $scope.tipPercentage
      $scope.customerCharges.total = $scope.customerChargessubtotal + $scope.customerChargestip
    };

    var initialCharges = $scope.customerCharges;
    var initialEarnings = $scope.earnings;

    $scope.reset = function() {
      $scope.customerCharges = initialCharges;
      $scope.earnings = initialEarnings;
    };
  }]);


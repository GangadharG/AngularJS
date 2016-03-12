angular.module('currencyApp')
    .controller('CurrencyCtrl', ['$scope', 'CurrencyService',
        function($scope, CurrencyService) {

            $scope.amount = '';


            // calling the CurrencyService to get all available currencies
            CurrencyService.getAvailableCurrencies()
                .then(function(response) {
                    $scope.availCurrencies = response;
                }, function() {});

            
            // Clicking on convert button on UI
            $scope.convert = function() {

                var from = $scope.fromCurrency.id;
                var amount = $scope.amount;
                var to = $scope.toCurrency.id;
                // calling the CurrencyService to convert the given values
                CurrencyService.convertCurrency(from, amount, to)
                    .then(function(response) {

                        $scope.toAmount = response.to_amount;
                    }, function() {});
            }
        }
    ]);

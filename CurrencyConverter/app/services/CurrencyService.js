angular.module('currencyApp')
    .service('CurrencyService', ['$http', '$q', function($http, $q) {

        // Prepare the requestEntity and make an AJAX call to get all available currencies
        function getAvailableCurrencies() {
            var requestEntity = {
                method: 'get',
                url: 'https://currencyconverter.p.mashape.com/availablecurrencies',
                headers: {
                    'X-Mashape-Key': 'GaLF6hUAm3mshY9yiLxluceMXL8Dp1f0HnFjsnhKiOH72cjGS2'
                }
            };

            return httpAJAXcall(requestEntity);
        };

        // Prepare the requestEntity and make an AJAX call to convert the given values
        function convertCurrency(from, amount, to) {
            var requestEntity = {
                method: 'get',
                url: 'https://currencyconverter.p.mashape.com',
                headers: {
                    'X-Mashape-Key': 'GaLF6hUAm3mshY9yiLxluceMXL8Dp1f0HnFjsnhKiOH72cjGS2'
                },
                params: {
                    "from": from,
                    "from_amount": amount,
                    "to": to
                }
            };
            return httpAJAXcall(requestEntity);
        };

        // DONT REPEAT YOURSELF (DRY) principle 
        // An AJAX http call, on getting the response which resolves and rejects the promise
        function httpAJAXcall(requestEntity) {

            var deferred = $q.defer();

            $http(requestEntity)
                .then(function(responseEntity) {
                    deferred.resolve(responseEntity.data);
                }, function(responseEntity) {
                    deferred.reject("An unknown error occurred.");
                });
            return deferred.promise;
        };

        // return the object
        return ({
            getAvailableCurrencies: getAvailableCurrencies,
            convertCurrency: convertCurrency
        });
    }]);

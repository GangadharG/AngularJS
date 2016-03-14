describe('Controller: CurrencyCtrl', function() {

    beforeEach(module('currencyApp'));

    var scope,
        controller,
        CurrencyService,
        $q,
        deferred;

    beforeEach(inject(function(_$rootScope_, $controller, _CurrencyService_, _$q_) {

        $scope = _$rootScope_.$new();
        CurrencyService = _CurrencyService_;
        $q = _$q_;

        deferred = _$q_.defer();

        // Use a Jasmine Spy to return the deferred promise
        spyOn(CurrencyService, 'getAvailableCurrencies').and.returnValue(deferred.promise);
        //spyOn(CurrencyService, 'convertCurrency').and.returnValue(deferred.promise);

        controller = $controller('CurrencyCtrl', {
            $scope: $scope,
            CurrencyService: CurrencyService
        });
    }));


    it('should have required methods in CurrencyService ', function() {
        expect(CurrencyService.getAvailableCurrencies).toBeDefined();
        expect(CurrencyService.convertCurrency).toBeDefined();
    });

    it('should have convert action on scope', function() {
        expect($scope.convert).toBeDefined();
    });

    it('should resolve promise', function() {
        // Setup the data we wish to return for the .then function in the controller
        deferred.resolve([{ }]);

        // We have to call apply for this to work
        $scope.$apply();

        // Since we called apply, not we can perform our assertions
        expect($scope.availCurrencies).not.toBe(undefined);
        //expect($scope.error).toBe(undefined);
    });

    it('should reject promise', function() {
        // This will call the .catch function in the controller
        deferred.reject();

        // We have to call apply for this to work
        $scope.$apply();

        // Since we called apply, not we can perform our assertions
        expect($scope.availCurrencies).toBe(undefined);
        //expect($scope.error).toBe(undefined);
    });

});

describe('Controller: CurrencyCtrl', function() {

    beforeEach(module('currencyApp'));

    var scope,
        controller,
        CurrencyService;

    beforeEach(inject(function(_$rootScope_, $controller, _CurrencyService_) {

        $scope = _$rootScope_.$new();
        CurrencyService = _CurrencyService_;

        spyOn(CurrencyService, 'convertCurrency').and.returnValue(2);

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

    it('should call convertCurrency on CurrencyService on calling convert', function() {
        $scope.toAmount = 2;
        $scope.convert();
        $scope.$digest();
        expect(CurrencyService.convertCurrency).toHaveBeenCalled();
        expect($scope.toAmount).toEqual(2);
    });

});

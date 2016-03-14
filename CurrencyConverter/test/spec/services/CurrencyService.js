describe('Service: CurrencyService', function() {

    beforeEach(module('currencyApp'));

    var http,
        q,
        httpBackend;

    beforeEach(inject(function($http, $q, $httpBackend) {

        http = $http;
        q = $q;
        httpBackend = $httpBackend;

        // httpBackend
        //     .when('GET', 'https://currencyconverter.p.mashape.com/availablecurrencies', undefined, {
        //     	params: {
        //     		from: "USD",
        //     		amount: 1,
        //     		to: "INR"
        //     	}
        //     })
        //     .respond(200, { data: 'value' });

        // httpBackend
        // 	.expect('GET', 'https://currencyconverter.p.mashape.com/availablecurrencies');

        httpBackend.whenGET('https://currencyconverter.p.mashape.com/availablecurrencies').respond(function() {
            return [200, true];
        });
    }));

    // it('should load all', function() {
    //     httpBackend.expectGET('https://currencyconverter.p.mashape.com/availablecurrencies', undefined,
    //         function(headers) {
    //             return headers.X-Mashape-Key === 'GaLF6hUAm3mshY9yiLxluceMXL8Dp1f0HnFjsnhKiOH72cjGS2';
    //         }).respond({});
    //     //httpBackend.flush();
    // });

    // it('get', function() {
    // 	httpBackend.whenGET('https://currencyconverter.p.mashape.com/availablecurrencies')
    // });



});

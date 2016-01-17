angular.module('customersApp').value('appSettings', {
    title: 'Customers Application',
    version: '1.0'
});

//constant is injectable into config whereas the value is not.
/*angular.module('customersApp').constant('appSettings', {
    title: 'customersApplication',
    version: '1.0'
});*/
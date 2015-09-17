angular.module('finance', [])
.factory('currencyConverter', function() {
	var cc = {};
	var usdToForeignRates = {
		USD: 1,
		EUR: 0.87579862,
		CNY: 6.37
	};

	cc.currencies = ['USD', 'EUR', 'CNY'];
	cc.convert = function (amount, inCurr, outCurr) {
		return amount * (usdToForeignRates[outCurr] / usdToForeignRates[inCurr]); 
	};

	return cc;
});
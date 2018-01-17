(function(){
	
	var gems = [
		{
			'name': 'Dodecahedron',
			'price': 2.95,
			'description': 'Rare gem found on the depths of a volcano',
			'canPurchase': true,
			'soldOut': false,
			'images': [
			{
				'full': 'images/gem1.jpg',
				'thumb': 'http://placehold.it/50x50',
			},],
			'reviews': [
			{
				'stars': 5,
				'body': 'Linda pedra, parece alienígena.',
				'author': 'bitch@gmail.com',
			},
			{
				'stars': 4,
				'body': 'Pedra linda.',
				'author': 'fucker@gmail.com',
			}]
		},
		{
			'name': 'Flame Rock',
			'price': 6.95,
			'description': 'Gem from space',
			'canPurchase': true,
			'soldOut': false,
			'images': [
			{
				'full': 'images/gem3.jpg',
				'thumb': 'http://placehold.it/50x50',
			},],
			'reviews': [
			{
				'stars': 4,
				'body': 'Pedra linda.',
				'author': 'fucker@gmail.com',
			}]
		},

		{
			'name': 'Pentagonal Gem',
			'price': 5.95,
			'description': 'Wonderful gem with 5 faces',
			'canPurchase': true,
			'soldOut': false,
			'images': [
			{
				'full': 'images/gem2.jpg',
				'thumb': 'http://placehold.it/50x50',
			},],
			'reviews': [
			{
				'stars': 5,
				'body': 'Pedra muito pesada',
				'author': 'sucker@gmail.com',
			}]
		},
	];

	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', ['$http', function($http){
		// this.products = gems;


		var store = this;
		store.products = [];

		$http.get('products.json').success(function(data){
			store.products = data;
		});


	}]);

	app.controller("PanelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};

	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	// app.directive('productTitle', function(){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'product-title.html'
	// 	};
	// });

	// app.directive('productPanels', function(){
	// 	return{
	// 		restrict: 'E',
	// 		templateUrl: 'product-panels.html',
	// 		controller:function(){
	// 						this.tab = 1;

	// 						this.selectTab = function(setTab) {
	// 							this.tab = setTab;
	// 						};

	// 						this.isSelected = function(checkTab){
	// 							return this.tab === checkTab;
	// 						};

	// 					},
	// 		controllerAs: 'panels'
	// 	};
	// });

})();
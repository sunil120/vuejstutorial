var instaceOne = new Vue({
	el: '#vue-app-one',
	data: {
		title: "App one"
	},
	methods: {

	},
	computed: {
		greet: function() {
			return "This block belongs app one"
		}
	}
});

var instaceTwo = new Vue({
	el: '#vue-app-two',
	data: {
		title: "App Two"
	},
	methods: {
		changeAppOneTitle: function() {
			instaceOne.title = "Changed from the App two"
		}
	},
	computed: {
		greet: function() {
			return "This block belongs app one"
		}
	}
});
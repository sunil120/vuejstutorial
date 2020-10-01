Vue.component('greeting' , {
	template:'<p>This is an component template, I am {{name}} <button v-on:click="changeName">Change name</button></p>',
	data:function(){
		return {
			name: "Sunil"
		}
	},
	methods: {
		changeName: function() {
			this.name = "Sushil"
		}
	}
})
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
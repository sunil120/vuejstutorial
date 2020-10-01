new Vue({
	el: '#vue-app',
	data: {
		name: "Sunil Kumar",
		age : 0,
		website : 'http://www.google.com',
		websiteTag : '<a href="http://www.google.com">Website Tag</a>',
		x:0,
		y:0,
		error: false,
		success:false,
		todods: ['Node','Vue','Express','Angular'],
		users: [
			{ name:'Sunil' , age:30 },
			{ name:'Sushil' , age:30 }
		],
		health:100,
		ended:false
	},
	methods: {
		courses: function(course) {

			return "Lets Start Learning " + course + " " + this.name;
		},
		subtractAge:  function(year) {
			this.age = this.age-year;
		},
		addAge:  function(year) {
			this.age = this.age+year;
		},
		updateXY: function(event) {
			this.x = event.offsetX
			this.y = event.offsetY
		},
		punch: function() {
			this.health -=10;
			if(this.health <=0) {
				this.ended= true;
			}
		},
		restart: function() {
			this.health=100;
			this.ended=false;
		}
	}
});
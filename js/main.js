// Person Model
var Person = Backbone.Model.extend({
	defaults: {
		firstName: 'John',
		lastName: 'Doe',
		age: 30,
		occupation: 'worker'
	},

	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
	model: Person
})

//View for all peopel
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	//initialize: function() {
	//	console.log(this.collection);
	//},

	render: function() {

		// filter through all items in a collection
		// underscore is baked in backbone with methods like _.each  _.forEach 
		//console.log(this.collection);
		//console.log(this);

		//this.collection.each( function(model) {
		this.collection.each( function(person) {
			var personView = new PersonView({ model: person });

			//console.log(personView);
			//console.log(personView.el);

			// append to root element
			//console.log(this);
			//personView.render();
			//this.$el.append(personView.el)

			this.$el.append(personView.render().el); // make sure render method has return this to use this code to chain them together

		}, this);

		return this;
	}
})

// The View for a Person
var PersonView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#personTemplate').html() ),

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this; // best practice, general rule of thumb, always return this.
	}
})

var peopleCollection = new PeopleCollection([
	{
		firstName: 'Jeffrey',
		lastName: 'Way',
		age: 27
	},
	{
		firstName: 'John',
		lastName: 'Doe',
		age: 50,
		occupation: 'web designer'
	},
	{
		firstName: 'Sally',
		lastName: 'Doe',
		age: 29,
		occupation: 'graphic designer'
	}
])

var peopleView = new PeopleView({ colloection: peopleCollection });

$(document.body).append(peopleView.render().el);

/***************** Test in Console chrome developer tool ***********

peopleView.render();
peopleView.el;

*/
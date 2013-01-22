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
			console.log(this.collection);

		//this.collection.each( function(model) {
		//this.collection.forEach( function(person) {
			// for each, create a new PersonView
			//var personView = new PersonView({ model: person });

			//console.log(personView);
		//});

		// for each, create a new PersonView
		// append to root element
	}
})

// The View for a Person
var PersonView = Backbone.View.extend({
	tagName: 'li',

	template: _.template( $('#personTemplate').html() ),	

	// similar to constructor, it will automatically run
	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
	}
})

var person = new Person;

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

//var person = new Person;
//var personView = new PersonView({ model: person });

//var person2 = new Person({ name: 'Jeffrey Way', age: 27 });
//var personView2 = new PersonView({ model: person });

//var peopleCollection = new PeopleCollection;
//peopleCollection.add(person);

//var peopleCollection = new PeopleCollection;
//peopleCollection.add(person2);

console.log(peopleCollection);


/***************** Test in Console chrome developer tool ***********

PersonView

var personView = new PersonView;

personView.el    //<div></div>
personView.$el   //[<div></div>]

personView.render();
personView.el;

personView.el;
$(document.body).html(personView.el);

var model = peopleCollection.at(0);
model
model.get('name');
model.set('occupation', 'web developer');
model.toJSON();
peopleCollection.toJSON();

*/
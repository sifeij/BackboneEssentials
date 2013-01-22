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

// The View for a Person
var PersonView = Backbone.View.extend({
	tagName: 'li',

	//template: _.template( $('#personTemplate').html() ),

	template: '#personTemplate', // need to change render function
	

	// similar to constructor, it will automatically run
	initialize: function() {
		this.render();
	},

	render: function() {

		// The first argument for _.template is supposed to be a string, not a jQuery object
		var template = _.template( $(this.template.html()) );
		this.$el.html(template);

		//this.$el.html( this.template(this.model.toJSON()) );
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
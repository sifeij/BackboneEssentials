// As rule of thumb, you want limit your globals to one or two
// in this case, template will be a global variable
// or you can wrap everything in a self evoking function
//(function() {
//	
//})();

//var template = function(id) {
//	return $('#' + id).html();
//};

// Automatically compile it
var template = function(id) {
	return _.template( $('#' + id).html() );
};

// Person Model
var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'worker'
	}
});

// A List of People
var PeopleCollection = Backbone.Collection.extend({
	model: Person
})

//View for all people
var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	render: function() {
		this.collection.each( function(person) {
			var personView = new PersonView({ model: person });
			this.$el.append(personView.render().el);
		}, this);

		return this;
	}
})

// The View for a Person
var PersonView = Backbone.View.extend({
	tagName: 'li',

	//template: _.template( template(personTemplate) ),

	// Automatically compile it
	template: template(personTemplate),

	render: function() {
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
})

var peopleCollection = new PeopleCollection([
	{
		name: 'Jeffrey Way',
		age: 27
	},
	{
		name: 'John Doe',
		age: 50,
		occupation: 'web designer'
	},
	{
		name: 'Sally Doe',
		age: 29,
		occupation: 'graphic designer'
	}
])

var peopleView = new PeopleView({ colloection: peopleCollection });

$(document.body).append(peopleView.render().el);

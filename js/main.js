//****************** Backbone JS *******************

var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'worker'
	}
});

var PersonView = Backbone.View.extend({
	tagName: 'li', 

	//template: _template("{{ name }}")
	template: _.template("<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"),
	

	// similar to constructor, it will automatically run
	initialize: function() {
		this.render();
	},

	render: function() {

		// anti-patter
		this.$el.html( this.template(this.model.toJSON()) );
	}
})

var person = new Person;
var personView = new PersonView({ model: person });


/***************** Test in Console chrome developer tool ***********

PersonView

var personView = new PersonView;

personView.el    //<div></div>
personView.$el   //[<div></div>]

personView.render();
personView.el;

personView.el;
$(document.body).html(personView.el);

*/
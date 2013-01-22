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

	template: '#personTemplate', // need to chane render function

	//template: _.template( $('#personTemplate').html() ),

	initialize: function() {
		this.render();
	},

	render: function() {
		var template = _.template( $(this.template) );
		this.$el.html(template);

		//this.$el.html( this.template(this.model.toJSON()) );
	}
})

var person = new Person;
var personView = new PersonView({ model: person });

var person2 = new Person({ name: 'Jeffrey Way', age: 27 });
var personView2 = new PersonView({ model: person });


/***************** Test in Console chrome developer tool ***********

PersonView

var personView = new PersonView;

personView.el    //<div></div>
personView.$el   //[<div></div>]

personView.render();
personView.el;

personView.el;
$(document.body).html(personView.el);

personView2.el;
$(document.body).html(personView2.el);

*/
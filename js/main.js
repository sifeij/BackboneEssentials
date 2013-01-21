//****************** Backbone JS *******************

var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'worker'
	}
});

var PersonView = Backbone.View.extend({
	tagName: 'li', 			//change div tag to li tag
	className: 'person',	//append class to the tag
	id: 'some-person',		//append id inside the tag

	// similar to constructor, it will automatically run
	initialize: function() {
		//console.log(this.model);
		this.render();
	},

	render: function() {
		this.$el.html( this.model.get('name') 
			+ ' (' + this.model.get('age') + ') - '  
			+ this.model.get('occupation') );
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
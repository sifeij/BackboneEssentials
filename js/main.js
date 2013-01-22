(function() {
	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};

	//App.Person = Backbone.Model.extend({});
	//App.PersonView = Backbone.View.extend({});
	//App.PeopleCollection = Backbone.Collection.extend({});

	//App.Models.Person = Backbone.Model.extend({});
	//App.Views.Person = Backbone.View.extend({});
	//App.Collections.People = Backbone.Collection.extend({});

	//Person = Backbone.Model.extend({});
	//PersonView = Backbone.View.extend({});
	//People = Backbone.Collection.extend({});

	//var person = new App.Person();

	// Person Model
	App.Models.Person = Backbone.Model.extend({
		defaults: {
			name: 'John Doe',
			age: 30,
			occupation: 'worker'
		}
	});

	// A List of People
	App.Collections.People = Backbone.Collection.extend({
		model: App.Models.Person
	});

	//View for all people
	App.Views.People = Backbone.View.extend({
		tagName: 'ul',

		render: function() {
			this.collection.each( function(person) {
				var personView = new App.Views.Person({ model: person });
				this.$el.append(personView.render().el);
			}, this);

			return this;
		}
	});

	// The View for a Person
	App.Views.Person = Backbone.View.extend({
		tagName: 'li',

		template: template('personTemplate'),

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			return this;
		}
	});

	peopleCollection = new App.Collections.People([
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
	]);

	var peopleView = new App.Views.People({ colloection: peopleCollection });

	$(document.body).append(peopleView.render().el);

	console.log(App.Collections);
	
})();
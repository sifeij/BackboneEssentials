//****************** Backbone JS *******************

var Person = Backbone.Model.extend({
	defaults: {
		name: 'John Doe',
		age: 30,
		occupation: 'worker'
	},
	work: function(){
		return this.get('name') + ' is working.';
	}
});

/***************** Test in Console chrome developer tool ***********

var person = new Person;
var person = new Person({ name: 'Jeffrey Way', age: 27}); // overwrite the default

person;
person.get('name');
person.work();
perosn.toJSON();
person.set('occupation', 'Web Developer'); // only set one property at a time
person.set({ occupation: 'instructor'}); // set multiple properties at a time

*/

//****************** Normal JS ********************

//var Quiz = function(title){	
//	this.title = title;
//};

//// If attache work method to person object like below
//// everytime when a new person is created, the work method will be executed
//var Person = function(config){
//	this.name = config.name;
//	this.age = config.age;
//	this.occupation = config.occupation;
//	this.work = function(){
//	}
//};

//// A better way to define a person with work method
//var Person = function(config){
//	this.name = config.name;
//	this.age = config.age;
//	this.occupation = config.occupation;	
//};
//
//Person.prototype.work = function(){
//	return this.name + ' is working.';
//};
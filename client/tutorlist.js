Template.tutorlist.helpers({
	tutors: function(){
		return Tutors.find({},{sort:{course:1,when:-1}})
	}
})

Template.tutorrow.helpers({
	delete: function(){
		return(this.uid==Meteor.userId())
	}
})

Template.tutorrow.events({
	"click .remove": function(event){
		Tutors.remove(this._id);
	}
})
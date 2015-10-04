Template.tutor.events({
	"submit #tutorform": function(event){
		
		event.preventDefault();
		
		var course = $("#course").val();
		var price = $("#price").val();
		var bio = $("#bio").val();

		var profile = Meteor.user().services.google;
		
		
		var tutorinfo = 
		  	{
				uid:Meteor.userId(),  
				who:profile.name, 
				course:course,
				price:price,
				email:profile.email,
				bio:bio,
				when: new Date()
			};
			
		console.dir(tutorinfo);
		
		Tutors.insert(tutorinfo);
		
		Router.go("home");
	}
});

Template.tutor.helpers({
	brandeisian: function(){
		var ee = Meteor.user().services.google.email;
		return ee.substring(ee.length-13) == "@brandeis.edu";
	}
})

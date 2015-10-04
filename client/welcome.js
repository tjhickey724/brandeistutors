Template.welcome.events({
	"click #tutee": function(event){
		Router.go("tutee")
	},
	"click #tutor": function(event){
		Router.go("tutor")
	}
})
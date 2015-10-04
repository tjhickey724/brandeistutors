Template.registerHelper('formatDate', function(date) {
  return moment(date).format('MM-DD-YYYY');
});

Meteor.startup(function () {  Meteor.absoluteUrl.defaultOptions.rootUrl = 'http://leiner.cs-i.brandeis.edu:4250/'; });
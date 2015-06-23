IDEController = RouteController.extend({
	layoutTemplate: "MasterLayout",
	onBeforeAction: function() {
		if (!Meteor.user() && !Meteor.loggingIn()) {
			this.layout("HelpLayout");
			// this.render("Login");
			this.next();
		} else {
			this.next();
		}
	},
	subscriptions: function() {
		myCurrAppId = Session.get('currentAppId');
		guestAppId = Session.get('guestAppId');
		return [
			Meteor.subscribe('apps'),
			Meteor.subscribe('connections', myCurrAppId),
			Meteor.subscribe('feeds', myCurrAppId),
			Meteor.subscribe('screens', myCurrAppId),
			Meteor.subscribe('widgets', myCurrAppId),
			Meteor.subscribe('themes', myCurrAppId),
			Meteor.subscribe('userList'),
			Meteor.subscribe('syslogs'),
			Meteor.subscribe('chats'),
			Meteor.subscribe('admins')
		]
	}
});

ProfileController = IDEController.extend({
	subscriptions: function() {
		console.log("ProfileController subscribe")
		Meteor.subscribe("userData");
	},

});

OldDocsController = IDEController.extend({
	subscriptions: function() {
		//console.log("OldDocsController subscriptions")
		Meteor.subscribe("help_pages")		
	}
});

DocsController = IDEController.extend({
	subscriptions: function() {
		//console.log("DocsController subscriptions")
		Meteor.subscribe("docs")		
	}
});
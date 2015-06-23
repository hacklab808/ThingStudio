Template.FeedsHeader.onRendered(function() {
	$('select').material_select();
});

Template.FeedsHeader.events({
	"click .header-action-1": function(e, tmpl) {
		e.preventDefault();
		menuOps();
		// $('.add-new-item select').material_select();
	}
});

Template.FeedsNewItem.events({
	"click .table-cancel-new": function(e, tmpl) {
		menuOps();
	},
	"click .divider-decoration": function(e, tmpl) {
		menuOps();
	}
});

Template.FeedsBody.helpers({
	feedlist: function(){
		return Feeds.find({}, {sort: {createdAt: -1}})
	},
	publicfeeds: function() {
		return Feeds.find({public: true})
	},
	ownerName: function(){
		owner = Meteor.users.findOne({_id: this.owner});
		return owner ? owner.username : "Owner Unknown";
	}
});
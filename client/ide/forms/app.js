Template.updateAppsForm.events({
	'click .send-email': function() {
		Meteor.call("sendShareLink", 'paul@loudnoises.us', 'noreply@thingstud.io', this._id)
	}
});

Template.updateAppsForm.helpers({
  share_url: function(){
    // console.log('share:' + this)
    return "http://" + Meteor.settings.public.domain + "/view/app/" + this._id;
  },
  screenCount: function() {
    return Screens.find({
      appId: this._id
    }).count();
  }
})

Meteor.startup(function(){
  AutoForm.addInputType("select-radio-inline-M", {
    template: "materializeRadio",
    valueOut: function () {
      return this.find('input[type=radio]:checked').val();
    },
    contextAdjust: function (context) {
      var itemAtts = _.omit(context.atts);

      // build items list
      context.items = [];

      // Add all defined options
      _.each(context.selectOptions, function(opt) {
        context.items.push({
          name: context.name,
          label: opt.label,
          value: opt.value,
          // _id must be included because it is a special property that
          // #each uses to track unique list items when adding and removing them
          // See https://github.com/meteor/meteor/issues/2174
          _id: opt.value,
          selected: (opt.value === context.value),
          atts: itemAtts
        });
      });

      return context;
    }
  });

  Template["materializeRadio"].helpers({
    atts: function selectedAttsAdjust() {
      var atts = _.clone(this.atts);
      if (this.selected) {
        atts.checked = "";
      }
      delete atts["data-schema-key"];
      return atts;
    },
    dsk: function dsk() {
      return {
        "data-schema-key": this.atts["data-schema-key"]
      }
    }
  });
});

Template.templatelist.helpers({
	template_list: function() {
		
		sns =  Screens.find({isWidget: false});
		console.log("SNS: ", sns)
		return sns;
	},

});

Template.registerHelper("templateurl", function(){
		console.log("URL", this)
		return "/view/screens/" + this._id;
})

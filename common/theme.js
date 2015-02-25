Themes = new Mongo.Collection("themes");




Schemas = {};

Schemas.Theme = new SimpleSchema({
	title: {
		type: String,
		label: "Name",
		max: 200
	},
	css: {
		type: String,
		autoform: {
			rows: 10,
	        afFieldInput: {
	          type: 'acecss',
	          class: 'editor' // optional
	          // summernote options goes here
	        }
		}
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			if(this.isInsert) {
				return Meteor.userId();
			} else if(this.isUpsert) {
				return {$setOnInsert: Meteor.userId};
			} else {
				this.unset();
			}
		}
	}
	
	
});

Themes.attachSchema(Schemas.Theme);
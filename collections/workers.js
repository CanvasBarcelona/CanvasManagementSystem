Workers = new Meteor.Collection('workers', {});
Workers.initEasySearch(['name', 'lastName', 'occupation'],{
	'use' : 'mongo-db'
});

Workers.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		max: 200
	},
	lastName: {
		type:String,
		label: "Lastname",
		max: 200
	},
	docId: {
		type:String,
		label: "Document of ID"
	},
	birthdate: {
		type:Date,
		label:"Birthdate",
		optional:true
	},
	occupation:{
        type: 'tags'
	},
	email: {
		type:String,
		label:"Email",
	},
	phone: {
		type:Number,
		label:"Number",
	}/*,
	cumple: {
    type: [Date],
    optional: true,
    autoform: {
      afFieldInput: {
        type: "string"
      }
    }
  }*/
}))


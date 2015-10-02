Template.body.helpers({
    users: function(){
      return Workers.find();
    }
  });

Template.worker.events({
      'click .clickme': function(event, template){
        template.$(".hideThis").slideToggle();
      },
      'click .delete': function(){
        Users.remove(this._id);
      }
   });

Template.body.helpers({
    users: function(){
      return Workers.find();
    },
});
Template.worker.events({
      'click .clickme': function(event, template){
        template.$(".hideThis").slideToggle();
        console.log(this.name + ' ' + this.lastName + ' was clicked! ID: ' + this._id);
      },
      'click .delete': function(){
        Workers.remove(this._id);
      }
});

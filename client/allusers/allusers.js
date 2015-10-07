Template.body.helpers({
    users: function(){
      return Workers.find();
    },
    /*singleUser: function(){
      return new Spacebars.SafeString("<p>It's working! " + this.name +"</p>");
    }*/
});
Template.worker.events({
      'click .clickme': function(event, template){
        template.$(".hideThis").slideToggle();
        console.log(this.name + ' ' + this.lastName + ' was clicked! ID: ' + this._id);
      },
      'click .delete': function(){
        Users.remove(this._id);
      }
});

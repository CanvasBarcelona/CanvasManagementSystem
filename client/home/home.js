Template.body.helpers({
    users: function(){
      return Users.find();
    }
  });
  
  Template.body.events({
    'submit .new-user': function(event){
      var name = event.target.name.value;
      var lastname = event.target.lastname.value;
      var docId = event.target.docId.value;
      var birthdate = event.target.birthdate.value;
      var occupation = event.target.occupation.value;
      var email = event.target.email.value;
      var phone = event.target.phone.value;


      Users.insert({
        name       : name,
        lastname   : lastname,
        docId      : docId,
        birthdate  : birthdate,
        occupation : occupation,
        email      : email,
        phone      : phone,
        createdAt  : new Date()
      });

      event.target.name.value = "";
      event.target.lastname.value = "";
      event.target.docId.value = "";
      event.target.birthdate.value = "";
      event.target.occupation.value = "";
      event.target.email.value = "";
      event.target.phone.value = "";
      return false;
    }
  });
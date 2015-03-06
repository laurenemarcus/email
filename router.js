Email.Router.map(function() {
  this.resource('inbox', {path: '/'});
  this.resource('new-inbox');
  this.resource('inbox-message', {path:'/:newInbox_id'});
  this.resource('sent');
  this.resource('new-sent');
  this.resource('sent-message', {path:':newSent_id'})
});

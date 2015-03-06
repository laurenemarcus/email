Email.NewInboxController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newInbox = this.store.createRecord('Inbox', {
        senderEmail: this.get('senderEmail'),
        senderSubject: this.get('senderSubject'),
        senderBody: this.get('senderBody')
      });
      newInbox.save();
      this.transitionToRoute('inbox');
    }
  }
});

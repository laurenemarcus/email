Email.NewSentController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newSent = this.store.createRecord('Sent', {
        sentEmail: this.get('sentEmail'),
        sentSubject: this.get('sentSubject'),
        sentBody: this.get('sentBody')
      });
      newSent.save();
      this.transitionToRoute('sent');
    }
  }
});

Email.SentRoute = Ember.Route.extend({
  model: function() {
    return. this.store.find('sent');
  }
});

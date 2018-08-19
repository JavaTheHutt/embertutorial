import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ["Bill Gates", "James Gosling", "Steve Jobs", "Elon Musk", "Dave Dziak"];
  }
});

/* globals casper, document */
casper.test.begin('App is setup correctly', 2, function suite(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertExists('.todo-list', 'List should exist');
    test.assertExists('.todo-form', 'Form should exist');
  });

  casper.run(function() {
    test.done();
  });
});

casper.test.begin('Adds todo items', function suite(test) {
  var oldTodos;
  casper.start('http://localhost:3000/', function() {
    oldTodos = this.evaluate(function() {
      return __utils__.findAll('.todo-item').length;
    });
    test.assertExists('form', 'main form is found');
    this.fill('form', {
        todo: 'testTodo'
    }, true);
  });

  casper.then(function() {
    var newTodos = this.evaluate(function() {
      return __utils__.findAll('.todo-item').length;
    });
    test.assertEquals(oldTodos+1, newTodos);
  });

  casper.run(function() {
    test.done();
  });
});

describe('API integration', function(){
  var server, setupStub, JSONresponse;

  JSONresponse = {
    todos: ['Write Tests', 'Profit']
  };

  before(function () {
    server = sinon.stub(todo.api, 'sendRequest', function (options, callback) {
      callback(null, JSONresponse);
    });
    setupStub = sinon.stub(todo, 'setup');
  });

  after(function () {
    todo.api.restore();
    todo.setup.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    todo.init();
    expect(setupStub.called).to.be(true);
  });
});

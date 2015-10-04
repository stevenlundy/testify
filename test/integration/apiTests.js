describe('API integration', function(){
  var server, setupStub, JSONresponse;

  JSONresponse = {
    todos: [
      {
        name: 'Write Tests',
        done: true
      },
      {
        name: 'Profit',
        done: false
      }
    ]
  };

  before(function () {
    server = sinon.stub(todo.api, 'sendRequest', function (options, callback) {
      callback(null, JSONresponse);
    });
    setupStub = sinon.stub(todo, 'setup');
  });

  after(function () {
    todo.api.sendRequest.restore();
    todo.setup.restore();
  });

  it('todo.setup receives an array of todos when todo.init is called', function () {
    todo.init();
    expect(setupStub.called).to.equal(true);
  });
});

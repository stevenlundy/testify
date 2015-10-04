var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function() {

    it('should have all the necessary methods', function(){
      todo.util.trimTodoName.should.be.a('function');
      todo.util.isValidTodoName.should.be.a('function');
      todo.util.getUniqueId.should.be.a('function');
    });
  });
});

describe('the todo.util methods', function() {
  describe('the trimTodoName funciton', function () {
    it('should remove extra whitespace', function () {
      expect(todo.util.trimTodoName('    Leading space')).to.equal('Leading space');
      expect(todo.util.trimTodoName('Trailing space    ')).to.equal('Trailing space');
    });
  });
});

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function() {

    it('should have all the necessary methods', function(){
      expect(todo.util).to.have.property('trimTodoName');
      expect(todo.util).to.have.property('isValidTodoName');
      expect(todo.util).to.have.property('getUniqueId');
      todo.util.trimTodoName.should.be.a('function');
      todo.util.isValidTodoName.should.be.a('function');
      todo.util.getUniqueId.should.be.a('function');
    });
  });
});

describe('the todo.util methods', function() {
  describe('the trimTodoName funciton', function () {
    it('should remove extra whitespace', function () {
      expect(todo.util.trimTodoName('    Leading space')).to.have.length(13);
      expect(todo.util.trimTodoName('Trailing space    ')).to.have.length(14);
    });
    it('should not modify inner whitespace', function () {
      expect(todo.util.trimTodoName('Inner     space')).to.equal('Inner     space');
    });
  });
  describe('the isValidTodoName method', function () {
    it('should return a boolean', function () {
      assert.typeOf(todo.util.isValidTodoName('todo'), 'boolean');
    });
    it('should not accept items with fewer than 2 non-space characters', function () {
      expect(todo.util.isValidTodoName('')).to.equal(false);
      expect(todo.util.isValidTodoName('1      ')).to.equal(false);
    });
  });
  describe('the getUniqueId method', function () {
    it('should not return the same number twice', function () {
      var id1 = todo.util.getUniqueId();
      var id2 = todo.util.getUniqueId();
      expect(id1).to.not.equal(id2);
    });
  });
});

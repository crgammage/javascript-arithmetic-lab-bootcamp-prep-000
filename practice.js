function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
  return function innerScope() {
    var inaccessible = "NOthing can touch me.";
    return innerVariable;
  }
}
var myScope = outerFunction();

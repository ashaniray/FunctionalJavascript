function foo() {
  var bar;
  quux = 'Global';
  function zip() {
    var quux = 'Local';
    bar = true;
  }
  return zip;
}


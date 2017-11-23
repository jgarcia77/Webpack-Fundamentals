var stripComments = require('strip-json-comments');

module.exports = function (source) {
    this.cacheable();

    console.log(source);

    var returnValue = stripComments(source);

    console.log(returnValue);

    return returnValue;
}
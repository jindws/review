function Test(options) {
    console.log(options)
}

Test.prototype.apply = function(compiler) {
    compiler.hooks.emit.tapAsync('done', function(compilation, callback) {
        console.log('Hello World!');
        callback()
    });
};

module.exports = Test;
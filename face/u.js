//u.console('breakfast').setTimeout(3000).console('lunch').setTimeout(3000).console('dinner')

function U() {
  this.promise = Promise.resolve()
  this.console = function (str) {
    this.promise.then(() => console.log(str));
    return this;
  };
  this.setTimeout = function (time) {
    this.promise = this.promise.then(() => {
      return new Promise((resolve) => {
        setTimeout(resolve, time);
      });
    });
    return this;
  };
}

const u = new U();

u.console("breakfast")
  .setTimeout(3000)
  .console("lunch")
  .setTimeout(3000)
  .console("dinner")
  .console("dinner");

var events = require("events");
var eventEmitter = new events.EventEmitter();

// eventEmitter.on("test",function(){
//     console.log("I have listened test");
// });
//
// eventEmitter.emit("test");

console.log(new events().__proto__ === eventEmitter.__proto__)//true

// const myEmitter = new events()
class MyEmitter extends events {}
const myEmitter = new MyEmitter()

function callback() {
    console.log('触发了event事件！')
}
myEmitter.on('event', callback)
myEmitter.emit('event')
myEmitter.off('event', callback);
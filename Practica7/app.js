// var Emitter = require("./emitter");
var Emitter = require("events"); 

let config = require("./config");

emtr.on("greet", () => {
    console.log("Somewhere, someone said hello. ");
})

emtr.on(config.events.GREET,() => {
    console.log("A greeting ocurred!");
})

console.log("Hello!");
emtr.emit("greet");

emtr.on(config.events.JUMP, () => {
    console.log("someone jumped!");
})

console.log(emtr);
emtr.emit("jump");
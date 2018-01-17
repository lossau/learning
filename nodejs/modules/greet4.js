function Greeter() {
    this.greeting = 'aoooo4';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = Greeter;
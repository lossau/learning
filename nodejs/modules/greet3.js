function Greeter() {
    this.greeting = 'aoooo3';
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greeter();
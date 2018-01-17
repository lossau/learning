function greet(callback) {
    console.log('hello');
    var data = {
        name: 'John'
    };
    callback(data);
}

greet(function(data) {
    console.log('the callback was invoked')
    console.log(data);
})

greet(function(data) {
    console.log('the second callback was invoked')
    console.log(data.name);
})

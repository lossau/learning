var wrapInSSML = function(texts) {
    return new Promise(function(resolve, reject) {
        var wrappedTexts = {};
        var ssml = "<text>$string$</text>";
        for (var t in texts) {
            wrappedTexts[t] = ssml.replace('$string$', texts[t]);
        }
        resolve(wrappedTexts);
    });
};

var prepareAudios = function(wrappedTexts) {
    return new Promise(function(resolve, reject) {
        var promises = [];
        for (var w in wrappedTexts) {
            promises.push(downloadAudios(w));
        }
        Promise.all(promises).then(function() {
            resolve('audios prepared');
        });
    });
};

var downloadAudios = function(message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('audio downloaded');
        }, 1000);
    });
};

var texts = {a: 'a', b: 'b', c: 'c'};

wrapInSSML(texts).then(function(result) {
    return prepareAudios(result);
}).then(function(result) {
    console.log('finished');
});

entered  = ['idade'];
required = ['nome','idade','profissao'];

function findMissing(a1, a2){
	return a1.filter(function(i) {
		return !(a2.indexOf(i) > -1);
	});
}

missing = findMissing(required, entered);
console.log(missing);
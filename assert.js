(function() {

var resultDiv = document.createElement('div');

resultDiv.innerHTML = 'All tests passed.';

document.body.appendChild(resultDiv);

// e is the bool expression passed to us by the function call
assert = function(e) {
	if (!e)
	{
		resultDiv.innerHTML = 'A test failed.';
		resultDiv.style.color = 'red';
	}
};

})();
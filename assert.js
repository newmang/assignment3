(function() {

var resultDiv = document.createElement('div');

// Do not show sucess until the test is actually passed
resultDiv.innerHTML = 'Code is not done running...';

document.body.appendChild(resultDiv);

// e is the bool expression passed to us by the function call
assert = function(e) {
	if (e)
		resultDiv.innerHTML = 'All tests passed.';
	else
	{
		resultDiv.innerHTML = 'A test failed.';
		resultDiv.style.color = 'red';
	}
};

})();
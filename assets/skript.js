var msg = 'Sign up to receive our newsletter for 10% off!';
	function updateMessage() {
	var el = document.getElementById('message')

	el.textContent = msg;

}





var msg1 = 'Looking for better understanding of the tools I already use.';
	function updateMessage1() {
	var el1 = document.getElementById('msg1')

	el1.textContent = msg1;

}






var msg2 = 'I want to make my own tools for specific objectives.';
	function updateMessage2() {
	var el2 = document.getElementById('msg2')

	el2.textContent = msg2;

}






var msg3 = 'I want to fill out my skill set.';
	function updateMessage3() {
	var el3 = document.getElementById('msg3')

	el3.textContent = msg3;

}

updateMessage();
updateMessage1();
updateMessage2();
updateMessage3();


/*Starting RNG Example
*/

var el = document.getElementById('info');
var randoNum = Math.floor((Math.random() * 10) + 1);

el.innerHTML = '<h1> random number</h1><h2>' + randomNum + '</h2>';
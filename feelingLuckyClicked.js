
function feelingLuckyClicked() {
	var form = document.getElementById('googleSearchForm');
	var win = window.open('http://www.google.com/search?q=' + form.q.value + '&btnI');
	win.focus();

}
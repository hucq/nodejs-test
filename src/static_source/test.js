function writeHello() {
	var div = document.createElement('div');
	div.innerHTML = 'javascript write this to page...<br />' + 'at time: ' + (new Date).toString();
	document.body.appendChild(div);
}

writeHello();

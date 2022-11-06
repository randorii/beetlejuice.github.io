function changeDisplay() {
	const header3 = document.getElementById("1");
	header3.style.display=h3showed ? 'block' : 'none';
	h3showed = !h3showed;
}

var h3showed = false;
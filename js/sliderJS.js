function animateNext() {
	var elements = document.querySelectorAll('.slider:not(.slided)');
	if (elements.length) {
		elements[0].classList.add('slided');
		setTimeout(animateNext,1000);
	}
}
window.addEventListener("load", function(){	animateNext(); });

const range = document.querySelector('#range'),
	imgContainer = document.querySelector('.images-container');

range.addEventListener('input', function(){
	const value = range.value;
	imgContainer.style.setProperty('--width', `${value}px`);
})
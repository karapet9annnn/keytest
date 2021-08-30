window.onload = function() {
  let input = document.querySelector('.i-1').focus();
}

document.querySelector('.i-1').onkeydown = function(event){
	let keys = document.querySelectorAll('.keys')
	for(let value of keys){
			if(event.key == value.getAttribute('data')){
		value.classList.add('active')
	}
	}
	event.preventDefault()
	console.log(event.key)
}
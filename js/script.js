const formBody = document.querySelector('.form');
 document.addEventListener("click",form);
 function form(event){
	if(event.target.closest('.form__button')){
		formBody.classList.toggle('_active');
	}
	if(!event.target.closest('.form')){
		formBody.classList.remove('_active');
	}
 }
 document.addEventListener("keyup",function(event){
	if (event.code === 'Escape'){
		formBody.classList.remove('_active');
	}
 });
 const txtItem = document.querySelector('.form__input');
 const txtItemLimit = txtItem.getAttribute('maxLength');
 const txtCounter = document.querySelector('.form__label span');
 txtItem.addEventListener("keyup",txtSetCounter);
 txtItem.addEventListener("keydown",function(event){
	if(event.repeat)txtSetCounter()
 });
 function txtSetCounter(){
	const txtCounterResult = txtItemLimit-txtItem.value.length;
	txtCounter.innerHTML = txtCounterResult;
 }
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".


const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', newInput);

function newInput(x) {
	span.textContent = x.currentTarget.value;

	if(x.currentTarget.value === "") {
		span.textContent = "Anonymous";
		
	}
}
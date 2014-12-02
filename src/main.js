/**
 * Input Placeholder Polyfill
 * MIT Licensed
 * Created by Christopher Rolfe 
 */
if (!('placeholder' in document.createElement("input"))) {
	var inputs = document.getElementsByTagName('input');

	for (var i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			inputs[i].value = inputs[i].getAttribute('placeholder');

			if (inputs[i].addEventListener) {
				inputs[i].addEventListener('click', hidePlaceholderOnFocus, false);
				inputs[i].addEventListener('blur', unfocusOnAnElement, false);
			} else if (inputs[i].attachEvent) {
				inputs[i].attachEvent('onclick', hidePlaceholderOnFocus);
				inputs[i].attachEvent('onblur', unfocusOnAnElement);
			}
		}
	}

	function hidePlaceholderOnFocus(event) {
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;
		if (target.value == target.getAttribute('placeholder')) {
			target.value = '';
		}
	}

	function unfocusOnAnElement(event) {
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;

		if (target.value == '') {
			target.value = target.getAttribute('placeholder');
		}
	}
}
/**
 * Input Placeholder Polyfill
 * MIT Licensed
 * Created by Christopher Rolfe 
 */
if (!('placeholder' in document.createElement("input"))) {

	// Get all the inputs
	var inputs = document.getElementsByTagName('input');

	// Loop over them
	for (var i = 0; i < inputs.length; i++) {
		// If they don't have a preset value
		if (!inputs[i].value) {
			// The set the placeholder
			inputs[i].value = inputs[i].getAttribute('placeholder');
		}

		// Attach event listeners for click and blur
		// Click so that we can clear the placeholder if we need to
		// Blur to re-add it if needed
		if (inputs[i].addEventListener) {
			inputs[i].addEventListener('click', hidePlaceholderOnFocus, false);
			inputs[i].addEventListener('blur', unfocusOnAnElement, false);
		} else if (inputs[i].attachEvent) {
			inputs[i].attachEvent('onclick', hidePlaceholderOnFocus);
			inputs[i].attachEvent('onblur', unfocusOnAnElement);
		}
	}

	/**
	 * When the input value is the same as the placeholder clear it
	 */
	function hidePlaceholderOnFocus(event) {
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;

		if (target.value == target.getAttribute('placeholder')) {
			target.value = '';
		}
	}

	/**
	 * When the input has an empty value put the placeholder back in
	 */
	function unfocusOnAnElement(event) {
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;

		if (target.value == '') {
			target.value = target.getAttribute('placeholder');
		}
	}
}
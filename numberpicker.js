function NumberPicker(options)
{
	this.element = document.getElementById(options.element_id)
	this.max = options.max
	this.min = options.min
	this.elementNumber = this.element.querySelector('p')
	this.currentNumber = this.elementNumber.innerText
	this.buttons = {
		increase: this.element.querySelector('button[data-toggle="increase"]'),
		decrease: this.element.querySelector('button[data-toggle="decrease"]'),
	}

	// Increase event
	this.buttons.increase.addEventListener('click', (e) => {
		this.increase()
	})

	// Decrease event
	this.buttons.decrease.addEventListener('click', (e) => {
		this.decrease()
	})
}

// Increase the number
NumberPicker.prototype.increase = function()
{
	let newNumber = parseInt(this.currentNumber) + 1

	this.updateNumber(newNumber)
}

// Decrease the number
NumberPicker.prototype.decrease = function(data)
{
	let newNumber = parseInt(this.currentNumber) - 1

	this.updateNumber(newNumber)
}

// Test the number if its higher than max or lower than minimum
NumberPicker.prototype.testMaxAndMin = function(number)
{
	// Test minimum
	if (number < this.min) {
		return this.min
	}

	// Test maximum
	if (number > this.max) {
		// When max number is set to -1, it is infinite
		if (this.max == -1) {
			return number
		}
		
		return this.max
	}

	return number
}

// Update the number
NumberPicker.prototype.updateNumber = function(number) {
	this.currentNumber = this.testMaxAndMin(number)
	this.elementNumber.innerText = this.currentNumber
}